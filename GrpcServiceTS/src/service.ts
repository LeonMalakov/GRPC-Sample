import {
    sendUnaryData,
    Server,
    ServerCredentials,
    ServerReadableStream,
    ServerUnaryCall,
    ServerWritableStream,
} from '@grpc/grpc-js';

// Подключаем сгенерированный сервис.
import { OutputService } from './proto/output_grpc_pb';

// Подключаем сгенерированные grpc классы.
import {
    SomeFunctionRequest,
    SomeFunctionResponse,
} from './proto/output_pb';

export class Service {
    run() {
        // Создаем обработчик запроса.
        const someFunctionHandler = (
            call: ServerUnaryCall<SomeFunctionRequest, SomeFunctionResponse>,
            callback: sendUnaryData<SomeFunctionResponse>
        ) => {
            // Класс ответа.
            const responce = new SomeFunctionResponse();

            // Достаем данные из запроса.
            const name = call.request.getData();

            // Кладем данные в ответ.
            responce.setData(`Responce for ${name}`);

            // Отправялем ответ.
            callback(null, responce);
            
            console.info(`[Service] Received: ${name}. Sent responce: ${responce.getData()}`);
        };

        // Создаем обработчик запроса.
        const someFunctionOutStreamHandler = async (
            call: ServerWritableStream<SomeFunctionRequest, SomeFunctionResponse>
        ) => {
            console.info(`[Service] SomeFunctionOutStream Received: ${call.request.getData()}.`);

            // Класс ответа.
            const responce = new SomeFunctionResponse();

            responce.setData("Msg 0");
            call.write(responce);

            await this.delay(1000);

            responce.setData("Msg 1");
            call.write(responce);

            call.end();    
        };

        // Создаем обработчик запроса.
        const someFunctionInStreamHandler = async (
            call: ServerReadableStream<SomeFunctionRequest, SomeFunctionResponse>,
            callback: sendUnaryData<SomeFunctionResponse>
        ) => {

            let done = false;

            call.on("data", (chunk : SomeFunctionResponse) => {
                console.info(`[Service] SomeFunctionInStream Received responce stream: ${chunk.getData()}`);
            });
    
            call.on("end", () => {
                done = true;
            });
        
            while(!done) {
                await this.delay(100);
            }

            // Класс ответа.
            const response = new SomeFunctionResponse();
            response.setData("Response here");
            callback(null, response);
        };

        const server = new Server();

        // Регаем сервис и обработчики запросов.
        server.addService(OutputService, {
            someFunction: someFunctionHandler,
            someFunctionOutStream: someFunctionOutStreamHandler,
            someFunctionInStream: someFunctionInStreamHandler
        });

        // Запускаем сервер.
        server.bindAsync('0.0.0.0:4001', ServerCredentials.createInsecure(), () => {
            server.start();

            console.log('server is running on 0.0.0.0:4001');
        });      
    }

    delay(ms : number) : Promise<void> {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
}
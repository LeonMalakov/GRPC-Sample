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

        // Обработчик обычного запроса.
        const someFunctionHandler = (
            call: ServerUnaryCall<SomeFunctionRequest, SomeFunctionResponse>,
            callback: sendUnaryData<SomeFunctionResponse>
        ) => {
            // Достаем данные из запроса.
            const name = call.request.getData();
            
            // Собираем ответ.
            const responce = new SomeFunctionResponse();
            responce.setData(`Responce for ${name}`);

            // Отправялем ответ.
            callback(null, responce);
            
            console.info(`[Service] Received: ${name}. Sent responce: ${responce.getData()}`);
        };

        // Обработчик запроса с потоком со стороны сервера.
        const someFunctionOutStreamHandler = async (
            call: ServerWritableStream<SomeFunctionRequest, SomeFunctionResponse>
        ) => {
            console.info(`[Service] SomeFunctionOutStream Received: ${call.request.getData()}.`);

            // Класс ответа.
            const responce = new SomeFunctionResponse();

            // Отправляем ответ в поток.
            responce.setData("Msg 0");
            call.write(responce);

            await this.delay(1000);

            // Отправляем ответ в поток.
            responce.setData("Msg 1");
            call.write(responce);

            // Завершаем поток.
            call.end();    
        };

        // Обработчик запроса с потоком со стороны клиента.
        const someFunctionInStreamHandler = async (
            call: ServerReadableStream<SomeFunctionRequest, SomeFunctionResponse>,
            callback: sendUnaryData<SomeFunctionResponse>
        ) => {
            // Колбэк получения порции данных из потока.
            call.on("data", (chunk : SomeFunctionResponse) => {
                console.info(`[Service] SomeFunctionInStream Received responce stream: ${chunk.getData()}`);
            });
    
            // Колбэк завершения потока.
            call.on("end", () => {
                // Отправляем ответ.
                const response = new SomeFunctionResponse();
                response.setData("Response here");
                callback(null, response);
            });
        };

        const server = new Server();

        // Регаем сервис и обработчики запросов.
        server.addService(OutputService, {
            someFunction: someFunctionHandler,
            someFunctionOutStream: someFunctionOutStreamHandler,
            someFunctionInStream: someFunctionInStreamHandler
        });

        // Запускаем сервер, указывая адрес и креденшалсы.
        server.bindAsync('0.0.0.0:4001', ServerCredentials.createInsecure(), () => {
            server.start();

            console.log('server is running on 0.0.0.0:4001');
        });      
    }

    // Задержка.
    delay(ms : number) : Promise<void> {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
}
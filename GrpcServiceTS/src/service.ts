import {
    sendUnaryData,
    Server,
    ServerCredentials,
    ServerUnaryCall,
} from '@grpc/grpc-js';

// Подключаем сгенерированный сервис.
import { OutputServiceService } from './proto/output_grpc_pb';

// Подключаем сгенерированные grpc классы.
import {
    OutputRequest,
    OutputResponse,
} from './proto/output_pb';

export class Service {
    run() {
        // Создаем обработчик запроса.
        const output = (
            call: ServerUnaryCall<OutputRequest, OutputResponse>,
            callback: sendUnaryData<OutputResponse>
        ) => {
            // Класс ответа.
            const responce = new OutputResponse();

            // Достаем данные из запроса.
            const name = call.request.getData();

            // Кладем данные в ответ.
            responce.setData(`Responce for ${name}`);

            // Отправялем ответ.
            callback(null, responce);
            
            console.info(`[Service] Received: ${name}. Sent responce: ${responce.getData()}`);
        };

        const server = new Server();

        // Регаем сервис и обработчик запроса.
        server.addService(OutputServiceService, {output});

        // Запускаем сервер.
        server.bindAsync('0.0.0.0:4000', ServerCredentials.createInsecure(), () => {
            server.start();

            console.log('server is running on 0.0.0.0:4000');
        });
    }
}
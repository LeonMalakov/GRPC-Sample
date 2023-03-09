import {
    sendUnaryData,
    Server,
    ServerCredentials,
    ServerUnaryCall,
} from '@grpc/grpc-js';

// Подключаем сгенерированный сервис.
import { TestServiceService } from './proto/services/test/v1/test_grpc_pb';

// Подключаем сгенерированные grpc классы.
import {
    SayHelloRequest,
    SayHelloResponse,
} from './proto/services/test/v1/test_pb.d';

export class Service {
    run() {
        // Создаем обработчик запроса.
        const sayHello = (
            call: ServerUnaryCall<SayHelloRequest, SayHelloResponse>,
            callback: sendUnaryData<SayHelloResponse>
        ) => {
            // Класс ответа.
            const responce = new SayHelloResponse();

            // Достаем данные из запроса.
            const name = call.request.getName();

            // Кладем данные в ответ.
            responce.setMessage(`Responce for ${name}`);

            // Отправялем ответ.
            callback(null, responce);
            
            console.info(`[Service] Received: ${name}. Sent responce: ${responce.getMessage()}`);
        };

        const server = new Server();

        // Регаем сервис и обработчик запроса.
        server.addService(TestServiceService, {sayHello});

        // Запускаем сервер.
        server.bindAsync('0.0.0.0:4000', ServerCredentials.createInsecure(), () => {
            server.start();

            console.log('server is running on 0.0.0.0:4000');
        });
    }
}
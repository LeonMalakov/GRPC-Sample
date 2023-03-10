import { credentials } from "@grpc/grpc-js";

// Подключаем сгенерированные классы.
import { InputClient } from "./proto/input_grpc_pb";
import { SomeFunctionRequest, SomeFunctionResponse } from "./proto/input_pb";

export class Client {
    async run() {

        // Создаем клиента.
        // Указаывается адрес и креденшалсы.
        const client = new InputClient('localhost:4000', credentials.createInsecure());

        // Для теста: каждые 5 секунды вызывает методы.
        while(true) {
            await this.runSomeFunction(client);
            await this.runSomeFunctionOutStream(client);
            await this.runSomeFunctionInStream(client);
            await this.delay(5000);
        }
    }

    // Пример обычного запроса.
    // Можно делать типизированный Promise и возвращать результат, вызывая resolve(результат).
    runSomeFunction(client : InputClient) : Promise<void> {
        // Создаем данные запроса.
        const request = new SomeFunctionRequest();
        request.setData("Abcd");

        // Оборачиваем колбэк в промис.
        return new Promise<void>((resolve, reject) => {
            // Вызыов grpc функции.
            client.someFunction(request, (error, response) => {
                if(error) {
                    // Если поймали ошибку, останавливаем промис.
                    reject(error);
                    console.info(`[Client] Failed: ${error.message}`);
                } else {
                    // Если все норм, возвращаем результат.
                    console.info(`[Client] Received responce: ${response.getData()}`);
                    resolve();
                }
            });
        });
    }

    // Пример запроса, где в ответ получаем стрим.
    runSomeFunctionOutStream(client : InputClient) : Promise<void> {
        // Создаем данные запроса.
        const request = new SomeFunctionRequest();
        request.setData("outstreamcalldata");

        // Оборачиваем колбэк в промис.
        return new Promise<void>((resolve, reject) => {
            // Вызыов grpc функции. Возвращает поток.
            // Есть хост не существует, эта функция генерирует необработанное исключение,
            // даже если обернуть ее в try.
            const responseStream = client.someFunctionOutStream(request);     
            
            // Устанавливаем колюэк получения порции данных.
            responseStream.on("data", (chunk : SomeFunctionResponse) => {
                console.info(`[Client] Received responce stream: ${chunk.getData()}`);
            });

            // Колбэк завершения потока: возвращаем результат.
            responseStream.on("end", resolve);

            // Колбэк ошибки: прерываем промис.
            responseStream.on("error", reject);
        });
    }

    // Пример вызова, где передаем стрим.
    runSomeFunctionInStream(client : InputClient) : Promise<void> {
        // Оборачиваем колбэк в промис.
        return new Promise<void>(async (resolve, reject) => {
            // Вызыов grpc функции. Возвращает поток.
            // В колбэках обрабатывается ошибка и ответ сервера.
            const stream = client.someFunctionInStream((error, response) => {
                if(error) {
                    // Поймали ошибку.
                    console.info(`[Client] Failed: ${error.message}`);
                    reject();
                } else {
                    // Получили ответ от сервера.
                    // (после того как завершили поток)
                    console.info(`[Client] runSomeFunctionInStream Received responce: ${response.getData()}`);
                    resolve();
                }
            });

            // Создаем данные запроса.
            const request = new SomeFunctionRequest();

            // Отправляем данные в поток.
            request.setData("Data 1");
            stream.write(request);

            // Отправляем данные в поток.
            request.setData("Data 2");
            stream.write(request);

            await this.delay(1000);

            // Отправляем данные в поток.
            request.setData("Data 3");
            stream.write(request);

            // Завершаем поток.
            stream.end();
        });
    }

    // Задержка.
    delay(ms : number) : Promise<void> {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
}
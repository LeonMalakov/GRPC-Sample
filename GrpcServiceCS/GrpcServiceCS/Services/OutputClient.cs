using Grpc.Core;
using Grpc.Net.Client;
using GrpcServiceCS.Grpc.Output;
using System;
using System.Threading;
using System.Threading.Tasks;

namespace GrpcServiceCS.Services {
    public class OutputClient {
        public async void Run() {
            // Создаем канал.
            // Указывается адрес и креденшалсы.
            using var channel = GrpcChannel.ForAddress("http://localhost:4001", new GrpcChannelOptions() {
                Credentials = ChannelCredentials.Insecure
            });

            // Создаем клиента.
            var client = new Output.OutputClient(channel);

            // Для примера запускаем методы каждые 5 секунд.
            while (true) {
                try {
                    await RunSomeFunction(client);
                    await RunSomeFunctionOutStream(client);
                    await RunSomeFunctionInStream(client);
                } catch (Exception ex) {
                    Console.WriteLine($"[Client] Failed");
                }
                await Task.Delay(5000);
            }
        }

        // Пример обычного запроса.
        private async Task RunSomeFunction(Output.OutputClient client) {
            // Вызываем grpc метод и получаем результат.
            var reply = await client.SomeFunctionAsync(new SomeFunctionRequest { Data = "qwerty" });
            Console.WriteLine($"[Client] Received: {reply.Data}");
        }

        // Пример запроса, где сервер отдает поток.
        private async Task RunSomeFunctionOutStream(Output.OutputClient client) {
            // Вызываем метод grpc и достаем оттуда поток.
            var data = client.SomeFunctionOutStream(new SomeFunctionRequest { Data = "qwerty" });
            var stream = data.ResponseStream;

            // Разбираем сообщения из потока.
            // Можно засунуть cancellationToken.
            var cancellation = new CancellationTokenSource();
            while(await stream.MoveNext(cancellation.Token)) {
                var response = stream.Current;
                Console.WriteLine($"[Client] RunSomeFunctionOutStream Received: {response.Data}");
            }
        }

        // Пример запроса, где клиент отправляет поток.
        private async Task RunSomeFunctionInStream(Output.OutputClient client) {
            // Вызываем метод grpc.
            var call = client.SomeFunctionInStream();

            for(int i = 0; i < 3; i++) {
                // Отправляем данные.
                await call.RequestStream.WriteAsync(new SomeFunctionRequest() { Data = $"msg {i}" });
                await Task.Delay(1000);
            }

            // Завершаем поток.
            await call.RequestStream.CompleteAsync();

            // Ждем ответа.
            var response = await call.ResponseAsync;

            Console.WriteLine($"[Client] RunSomeFunctionInStream Received: {response.Data}");
        }
    }
}

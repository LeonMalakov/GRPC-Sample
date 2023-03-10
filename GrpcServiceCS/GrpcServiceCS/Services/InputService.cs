using Grpc.Core;
using GrpcServiceCS.Grpc.Input;
using Microsoft.Extensions.Logging;
using System;
using System.Threading.Tasks;

namespace GrpcServiceCS.Services {
    public class InputService : Input.InputBase {
        private readonly ILogger<InputService> _logger;
        public InputService(ILogger<InputService> logger) {
            _logger = logger;
        }

        // Пример обычного запроса.
        public override Task<SomeFunctionResponse> SomeFunction(SomeFunctionRequest request, ServerCallContext context) {
            // Собираем ответ.
            var responce = new SomeFunctionResponse {
                Data = "Responce for: " + request.Data
            };

            Console.WriteLine($"[Service] Received: {request.Data}. Sent Responce: {responce.Data}");

            // Отправляем ответ.
            return Task.FromResult(responce);
        }

        // Пример запроса, где сервер отдает поток.
        public override async Task SomeFunctionOutStream(SomeFunctionRequest request, IServerStreamWriter<SomeFunctionResponse> responseStream, ServerCallContext context) {
            // Полученные данные.
            string data = request.Data;
            Console.WriteLine($"[Service] SomeFunctionOutStream Received: {data}");

            for (int i = 0; i < 4; i++) {
                // Пишем данные в поток.
                var responce = new SomeFunctionResponse { 
                    Data = $"Stream Responce {i} for {data}"
                };
                await responseStream.WriteAsync(responce);

                await Task.Delay(1000);
            }
        }

        // Пример запроса, где клиент посылает поток.
        public override async Task<SomeFunctionResponse> SomeFunctionInStream(IAsyncStreamReader<SomeFunctionRequest> requestStream, ServerCallContext context) {
            // Разбираем сообщения потока.
            await foreach(var request in requestStream.ReadAllAsync()) {
                Console.WriteLine($"[Service] SomeFunctionInStream Received: {request.Data}.");
            }

            // Собираем ответ.
            var response = new SomeFunctionResponse() {
                Data = $"SomeFunctionInStream Responce."
            };

            // Отправляем ответ.
            return response;
        }
    }
}
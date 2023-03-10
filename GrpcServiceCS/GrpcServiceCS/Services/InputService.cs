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

        public override Task<SomeFunctionResponse> SomeFunction(SomeFunctionRequest request, ServerCallContext context) {
            var responce = new SomeFunctionResponse {
                Data = "Responce for: " + request.Data
            };

            Console.WriteLine($"[Service] Received: {request.Data}. Sent Responce: {responce.Data}");

            return Task.FromResult(responce);
        }

        public override async Task SomeFunctionOutStream(SomeFunctionRequest request, IServerStreamWriter<SomeFunctionResponse> responseStream, ServerCallContext context) {
            string data = request.Data;
            Console.WriteLine($"[Service] SomeFunctionOutStream Received: {data}");

            for (int i = 0; i < 4; i++) {
                var responce = new SomeFunctionResponse { 
                    Data = $"Stream Responce {i} for {data}"
                };
                await responseStream.WriteAsync(responce);
                await Task.Delay(1000);
            }
        }

        public override async Task<SomeFunctionResponse> SomeFunctionInStream(IAsyncStreamReader<SomeFunctionRequest> requestStream, ServerCallContext context) {
            await foreach(var request in requestStream.ReadAllAsync()) {
                Console.WriteLine($"[Service] SomeFunctionInStream Received: {request.Data}.");
            }

            var response = new SomeFunctionResponse() {
                Data = $"SomeFunctionInStream Responce."
            };

            return response;
        }
    }
}
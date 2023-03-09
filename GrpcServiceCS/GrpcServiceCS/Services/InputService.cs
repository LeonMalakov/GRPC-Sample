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
    }
}
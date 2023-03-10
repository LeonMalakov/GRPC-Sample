using Grpc.Core;
using Grpc.Net.Client;
using GrpcServiceCS.Grpc.Output;
using System;
using System.Threading;
using System.Threading.Tasks;

namespace GrpcServiceCS.Services {
    public class OutputClient {
        public async void Run() {
            using var channel = GrpcChannel.ForAddress("http://localhost:4001", new GrpcChannelOptions() {
                Credentials = ChannelCredentials.Insecure
            });

            var client = new Output.OutputClient(channel);
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

        private async Task RunSomeFunction(Output.OutputClient client) {
            var reply = await client.SomeFunctionAsync(new SomeFunctionRequest { Data = "qwerty" });
            Console.WriteLine($"[Client] Received: {reply.Data}");
        }

        private async Task RunSomeFunctionOutStream(Output.OutputClient client) {
            var data = client.SomeFunctionOutStream(new SomeFunctionRequest { Data = "qwerty" });
            var stream = data.ResponseStream;
            var cancellation = new CancellationTokenSource();
            while(await stream.MoveNext(cancellation.Token)) {
                var response = stream.Current;
                Console.WriteLine($"[Client] RunSomeFunctionOutStream Received: {response.Data}");
            }
        }

        private async Task RunSomeFunctionInStream(Output.OutputClient client) {
            var call = client.SomeFunctionInStream();

            for(int i = 0; i < 3; i++) {
                await call.RequestStream.WriteAsync(new SomeFunctionRequest() { Data = $"msg {i}" });
                await Task.Delay(1000);
            }
            await call.RequestStream.CompleteAsync();

            var response = await call.ResponseAsync;

            Console.WriteLine($"[Client] RunSomeFunctionInStream Received: {response.Data}");
        }
    }
}

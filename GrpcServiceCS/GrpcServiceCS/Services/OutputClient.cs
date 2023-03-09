using Grpc.Core;
using Grpc.Net.Client;
using GrpcServiceCS.Grpc.Output;
using System;

namespace GrpcServiceCS.Services {
    public class OutputClient {
        public async void Run() {
            using var channel = GrpcChannel.ForAddress("http://localhost:4000", new GrpcChannelOptions() { 
                Credentials = ChannelCredentials.Insecure 
            });

            var client = new Output.OutputClient(channel);
            var reply = await client.SomeFunctionAsync(new SomeFunctionRequest { Data = "qwerty" });

            Console.WriteLine($"[Client] Received: {reply.Data}");
        }
    }
}

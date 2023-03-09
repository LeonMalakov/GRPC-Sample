import { credentials } from "@grpc/grpc-js";
import { TestServiceClient } from "./proto/services/test/v1/test_grpc_pb";
import { SayHelloRequest } from "./proto/services/test/v1/test_pb";

export class Client {
    run() {
        const client = new TestServiceClient('localhost:4000', credentials.createInsecure());

        const request = new SayHelloRequest();
        request.setName("Abcd");

        client.sayHello(request, (error, response) => {
            if(error) {
                console.error(error);
                return;
            }

            console.info(`[Client] Received responce: ${response.getMessage()}`);
        });
    }
}
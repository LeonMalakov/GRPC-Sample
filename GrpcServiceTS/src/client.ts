import { credentials } from "@grpc/grpc-js";
import { InputClient } from "./proto/input_grpc_pb";
import { SomeFunctionRequest } from "./proto/input_pb";

export class Client {
    run() {
        const client = new InputClient('localhost:4000', credentials.createInsecure());

        const request = new SomeFunctionRequest();
        request.setData("Abcd");

        client.someFunction(request, (error, response) => {
            if(error) {
                console.error(error);
                return;
            }

            console.info(`[Client] Received responce: ${response.getData()}`);
        });
    }
}
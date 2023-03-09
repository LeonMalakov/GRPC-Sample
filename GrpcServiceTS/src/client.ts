import { credentials } from "@grpc/grpc-js";
import { InputServiceClient } from "./proto/input_grpc_pb";
import { InputRequest } from "./proto/input_pb";

export class Client {
    run() {
        const client = new InputServiceClient('localhost:4000', credentials.createInsecure());

        const request = new InputRequest();
        request.setData("Abcd");

        client.input(request, (error, response) => {
            if(error) {
                console.error(error);
                return;
            }

            console.info(`[Client] Received responce: ${response.getData()}`);
        });
    }
}
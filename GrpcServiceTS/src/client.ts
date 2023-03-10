import { credentials } from "@grpc/grpc-js";
import { InputClient } from "./proto/input_grpc_pb";
import { SomeFunctionRequest, SomeFunctionResponse } from "./proto/input_pb";

export class Client {
    async run() {
        const client = new InputClient('localhost:4000', credentials.createInsecure());

        await this.runSomeFunction(client);
        await this.runSomeFunctionOutStream(client);
        await this.runSomeFunctionInStream(client);
    }

    async runSomeFunction(client : InputClient) {
        const request = new SomeFunctionRequest();
        request.setData("Abcd");

        let done = false;
        client.someFunction(request, (error, response) => {
            if(error) {
                console.error(error);
                return;
            }
            console.info(`[Client] Received responce: ${response.getData()}`);
            done = true;
        });

        // 
        while(!done) {
            await this.delay(100);
        }
    }

    async runSomeFunctionOutStream(client : InputClient) {
        const request = new SomeFunctionRequest();
        request.setData("outstreamcalldata");

        let done = false;
        const responseStream = await client.someFunctionOutStream(request);
        
        responseStream.on("data", (chunk : SomeFunctionResponse) => {
            console.info(`[Client] Received responce stream: ${chunk.getData()}`);
        });

        responseStream.on("end", () => {
            done = true;
        });

        // 
        while(!done) {
            await this.delay(100);
        }
    }

    async runSomeFunctionInStream(client : InputClient) {
        let done = false;
        const stream = client.someFunctionInStream((error, response) => {
            console.info(`[Client] runSomeFunctionInStream Received responce: ${response.getData()}`);
            done = true;
        });
        const request = new SomeFunctionRequest();
        request.setData("Data 1");
        stream.write(request);

        request.setData("Data 2");
        stream.write(request);

        await this.delay(1000);

        request.setData("Data 3");
        stream.write(request);
        stream.end();

        // 
        while(!done) {
            await this.delay(100);
        }
    }

    delay(ms : number) : Promise<void> {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
}
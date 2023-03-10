import { credentials } from "@grpc/grpc-js";
import { InputClient } from "./proto/input_grpc_pb";
import { SomeFunctionRequest, SomeFunctionResponse } from "./proto/input_pb";

export class Client {
    async run() {
        const client = new InputClient('localhost:4000', credentials.createInsecure());

        while(true) {
            await this.runSomeFunction(client);
            await this.runSomeFunctionOutStream(client);
            await this.runSomeFunctionInStream(client);
            await this.delay(5000);
        }
    }

    // Можно делать типизированный Promise и возвращать результат, вызывая resolve(результат).
    runSomeFunction(client : InputClient) : Promise<void> {
        const request = new SomeFunctionRequest();
        request.setData("Abcd");

        return new Promise<void>((resolve, reject) => {
            client.someFunction(request, (error, response) => {
                if(error) {
                    reject(error);
                    console.info(`[Client] Failed: ${error.message}`);
                } else {
                    console.info(`[Client] Received responce: ${response.getData()}`);
                    resolve();
                }
            });
        });
    }

    runSomeFunctionOutStream(client : InputClient) : Promise<void> {
        const request = new SomeFunctionRequest();
        request.setData("outstreamcalldata");

        return new Promise<void>((resolve, reject) => {
            const responseStream = client.someFunctionOutStream(request);     
            
            responseStream.on("data", (chunk : SomeFunctionResponse) => {
                console.info(`[Client] Received responce stream: ${chunk.getData()}`);
            });

            responseStream.on("end", resolve);
            responseStream.on("error", reject);
        });
    }

    runSomeFunctionInStream(client : InputClient) : Promise<void> {
        return new Promise<void>(async (resolve, reject) => {
            const stream = client.someFunctionInStream((error, response) => {
                if(error){
                    console.info(`[Client] Failed: ${error.message}`);
                    reject();
                } else {
                    console.info(`[Client] runSomeFunctionInStream Received responce: ${response.getData()}`);
                }
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

            resolve();
        });
    }

    delay(ms : number) : Promise<void> {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
}
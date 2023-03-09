// package: output
// file: output.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as output_pb from "./output_pb";

interface IOutputService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    someFunction: IOutputService_ISomeFunction;
}

interface IOutputService_ISomeFunction extends grpc.MethodDefinition<output_pb.SomeFunctionRequest, output_pb.SomeFunctionResponse> {
    path: "/output.Output/SomeFunction";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<output_pb.SomeFunctionRequest>;
    requestDeserialize: grpc.deserialize<output_pb.SomeFunctionRequest>;
    responseSerialize: grpc.serialize<output_pb.SomeFunctionResponse>;
    responseDeserialize: grpc.deserialize<output_pb.SomeFunctionResponse>;
}

export const OutputService: IOutputService;

export interface IOutputServer extends grpc.UntypedServiceImplementation {
    someFunction: grpc.handleUnaryCall<output_pb.SomeFunctionRequest, output_pb.SomeFunctionResponse>;
}

export interface IOutputClient {
    someFunction(request: output_pb.SomeFunctionRequest, callback: (error: grpc.ServiceError | null, response: output_pb.SomeFunctionResponse) => void): grpc.ClientUnaryCall;
    someFunction(request: output_pb.SomeFunctionRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: output_pb.SomeFunctionResponse) => void): grpc.ClientUnaryCall;
    someFunction(request: output_pb.SomeFunctionRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: output_pb.SomeFunctionResponse) => void): grpc.ClientUnaryCall;
}

export class OutputClient extends grpc.Client implements IOutputClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public someFunction(request: output_pb.SomeFunctionRequest, callback: (error: grpc.ServiceError | null, response: output_pb.SomeFunctionResponse) => void): grpc.ClientUnaryCall;
    public someFunction(request: output_pb.SomeFunctionRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: output_pb.SomeFunctionResponse) => void): grpc.ClientUnaryCall;
    public someFunction(request: output_pb.SomeFunctionRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: output_pb.SomeFunctionResponse) => void): grpc.ClientUnaryCall;
}

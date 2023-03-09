// package: input
// file: input.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as input_pb from "./input_pb";

interface IInputService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    someFunction: IInputService_ISomeFunction;
}

interface IInputService_ISomeFunction extends grpc.MethodDefinition<input_pb.SomeFunctionRequest, input_pb.SomeFunctionResponse> {
    path: "/input.Input/SomeFunction";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<input_pb.SomeFunctionRequest>;
    requestDeserialize: grpc.deserialize<input_pb.SomeFunctionRequest>;
    responseSerialize: grpc.serialize<input_pb.SomeFunctionResponse>;
    responseDeserialize: grpc.deserialize<input_pb.SomeFunctionResponse>;
}

export const InputService: IInputService;

export interface IInputServer extends grpc.UntypedServiceImplementation {
    someFunction: grpc.handleUnaryCall<input_pb.SomeFunctionRequest, input_pb.SomeFunctionResponse>;
}

export interface IInputClient {
    someFunction(request: input_pb.SomeFunctionRequest, callback: (error: grpc.ServiceError | null, response: input_pb.SomeFunctionResponse) => void): grpc.ClientUnaryCall;
    someFunction(request: input_pb.SomeFunctionRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: input_pb.SomeFunctionResponse) => void): grpc.ClientUnaryCall;
    someFunction(request: input_pb.SomeFunctionRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: input_pb.SomeFunctionResponse) => void): grpc.ClientUnaryCall;
}

export class InputClient extends grpc.Client implements IInputClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public someFunction(request: input_pb.SomeFunctionRequest, callback: (error: grpc.ServiceError | null, response: input_pb.SomeFunctionResponse) => void): grpc.ClientUnaryCall;
    public someFunction(request: input_pb.SomeFunctionRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: input_pb.SomeFunctionResponse) => void): grpc.ClientUnaryCall;
    public someFunction(request: input_pb.SomeFunctionRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: input_pb.SomeFunctionResponse) => void): grpc.ClientUnaryCall;
}

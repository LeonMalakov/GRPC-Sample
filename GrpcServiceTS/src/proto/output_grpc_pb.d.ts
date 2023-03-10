// package: output
// file: output.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as output_pb from "./output_pb";

interface IOutputService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    someFunction: IOutputService_ISomeFunction;
    someFunctionOutStream: IOutputService_ISomeFunctionOutStream;
    someFunctionInStream: IOutputService_ISomeFunctionInStream;
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
interface IOutputService_ISomeFunctionOutStream extends grpc.MethodDefinition<output_pb.SomeFunctionRequest, output_pb.SomeFunctionResponse> {
    path: "/output.Output/SomeFunctionOutStream";
    requestStream: false;
    responseStream: true;
    requestSerialize: grpc.serialize<output_pb.SomeFunctionRequest>;
    requestDeserialize: grpc.deserialize<output_pb.SomeFunctionRequest>;
    responseSerialize: grpc.serialize<output_pb.SomeFunctionResponse>;
    responseDeserialize: grpc.deserialize<output_pb.SomeFunctionResponse>;
}
interface IOutputService_ISomeFunctionInStream extends grpc.MethodDefinition<output_pb.SomeFunctionRequest, output_pb.SomeFunctionResponse> {
    path: "/output.Output/SomeFunctionInStream";
    requestStream: true;
    responseStream: false;
    requestSerialize: grpc.serialize<output_pb.SomeFunctionRequest>;
    requestDeserialize: grpc.deserialize<output_pb.SomeFunctionRequest>;
    responseSerialize: grpc.serialize<output_pb.SomeFunctionResponse>;
    responseDeserialize: grpc.deserialize<output_pb.SomeFunctionResponse>;
}

export const OutputService: IOutputService;

export interface IOutputServer extends grpc.UntypedServiceImplementation {
    someFunction: grpc.handleUnaryCall<output_pb.SomeFunctionRequest, output_pb.SomeFunctionResponse>;
    someFunctionOutStream: grpc.handleServerStreamingCall<output_pb.SomeFunctionRequest, output_pb.SomeFunctionResponse>;
    someFunctionInStream: grpc.handleClientStreamingCall<output_pb.SomeFunctionRequest, output_pb.SomeFunctionResponse>;
}

export interface IOutputClient {
    someFunction(request: output_pb.SomeFunctionRequest, callback: (error: grpc.ServiceError | null, response: output_pb.SomeFunctionResponse) => void): grpc.ClientUnaryCall;
    someFunction(request: output_pb.SomeFunctionRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: output_pb.SomeFunctionResponse) => void): grpc.ClientUnaryCall;
    someFunction(request: output_pb.SomeFunctionRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: output_pb.SomeFunctionResponse) => void): grpc.ClientUnaryCall;
    someFunctionOutStream(request: output_pb.SomeFunctionRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<output_pb.SomeFunctionResponse>;
    someFunctionOutStream(request: output_pb.SomeFunctionRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<output_pb.SomeFunctionResponse>;
    someFunctionInStream(callback: (error: grpc.ServiceError | null, response: output_pb.SomeFunctionResponse) => void): grpc.ClientWritableStream<output_pb.SomeFunctionRequest>;
    someFunctionInStream(metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: output_pb.SomeFunctionResponse) => void): grpc.ClientWritableStream<output_pb.SomeFunctionRequest>;
    someFunctionInStream(options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: output_pb.SomeFunctionResponse) => void): grpc.ClientWritableStream<output_pb.SomeFunctionRequest>;
    someFunctionInStream(metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: output_pb.SomeFunctionResponse) => void): grpc.ClientWritableStream<output_pb.SomeFunctionRequest>;
}

export class OutputClient extends grpc.Client implements IOutputClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public someFunction(request: output_pb.SomeFunctionRequest, callback: (error: grpc.ServiceError | null, response: output_pb.SomeFunctionResponse) => void): grpc.ClientUnaryCall;
    public someFunction(request: output_pb.SomeFunctionRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: output_pb.SomeFunctionResponse) => void): grpc.ClientUnaryCall;
    public someFunction(request: output_pb.SomeFunctionRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: output_pb.SomeFunctionResponse) => void): grpc.ClientUnaryCall;
    public someFunctionOutStream(request: output_pb.SomeFunctionRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<output_pb.SomeFunctionResponse>;
    public someFunctionOutStream(request: output_pb.SomeFunctionRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<output_pb.SomeFunctionResponse>;
    public someFunctionInStream(callback: (error: grpc.ServiceError | null, response: output_pb.SomeFunctionResponse) => void): grpc.ClientWritableStream<output_pb.SomeFunctionRequest>;
    public someFunctionInStream(metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: output_pb.SomeFunctionResponse) => void): grpc.ClientWritableStream<output_pb.SomeFunctionRequest>;
    public someFunctionInStream(options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: output_pb.SomeFunctionResponse) => void): grpc.ClientWritableStream<output_pb.SomeFunctionRequest>;
    public someFunctionInStream(metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: output_pb.SomeFunctionResponse) => void): grpc.ClientWritableStream<output_pb.SomeFunctionRequest>;
}

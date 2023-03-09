// package: input
// file: input.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as input_pb from "./input_pb";

interface IInputServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    input: IInputServiceService_IInput;
}

interface IInputServiceService_IInput extends grpc.MethodDefinition<input_pb.InputRequest, input_pb.InputResponse> {
    path: "/input.InputService/Input";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<input_pb.InputRequest>;
    requestDeserialize: grpc.deserialize<input_pb.InputRequest>;
    responseSerialize: grpc.serialize<input_pb.InputResponse>;
    responseDeserialize: grpc.deserialize<input_pb.InputResponse>;
}

export const InputServiceService: IInputServiceService;

export interface IInputServiceServer extends grpc.UntypedServiceImplementation {
    input: grpc.handleUnaryCall<input_pb.InputRequest, input_pb.InputResponse>;
}

export interface IInputServiceClient {
    input(request: input_pb.InputRequest, callback: (error: grpc.ServiceError | null, response: input_pb.InputResponse) => void): grpc.ClientUnaryCall;
    input(request: input_pb.InputRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: input_pb.InputResponse) => void): grpc.ClientUnaryCall;
    input(request: input_pb.InputRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: input_pb.InputResponse) => void): grpc.ClientUnaryCall;
}

export class InputServiceClient extends grpc.Client implements IInputServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public input(request: input_pb.InputRequest, callback: (error: grpc.ServiceError | null, response: input_pb.InputResponse) => void): grpc.ClientUnaryCall;
    public input(request: input_pb.InputRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: input_pb.InputResponse) => void): grpc.ClientUnaryCall;
    public input(request: input_pb.InputRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: input_pb.InputResponse) => void): grpc.ClientUnaryCall;
}

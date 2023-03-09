// package: output
// file: output.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as output_pb from "./output_pb";

interface IOutputServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    output: IOutputServiceService_IOutput;
}

interface IOutputServiceService_IOutput extends grpc.MethodDefinition<output_pb.OutputRequest, output_pb.OutputResponse> {
    path: "/output.OutputService/Output";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<output_pb.OutputRequest>;
    requestDeserialize: grpc.deserialize<output_pb.OutputRequest>;
    responseSerialize: grpc.serialize<output_pb.OutputResponse>;
    responseDeserialize: grpc.deserialize<output_pb.OutputResponse>;
}

export const OutputServiceService: IOutputServiceService;

export interface IOutputServiceServer extends grpc.UntypedServiceImplementation {
    output: grpc.handleUnaryCall<output_pb.OutputRequest, output_pb.OutputResponse>;
}

export interface IOutputServiceClient {
    output(request: output_pb.OutputRequest, callback: (error: grpc.ServiceError | null, response: output_pb.OutputResponse) => void): grpc.ClientUnaryCall;
    output(request: output_pb.OutputRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: output_pb.OutputResponse) => void): grpc.ClientUnaryCall;
    output(request: output_pb.OutputRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: output_pb.OutputResponse) => void): grpc.ClientUnaryCall;
}

export class OutputServiceClient extends grpc.Client implements IOutputServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public output(request: output_pb.OutputRequest, callback: (error: grpc.ServiceError | null, response: output_pb.OutputResponse) => void): grpc.ClientUnaryCall;
    public output(request: output_pb.OutputRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: output_pb.OutputResponse) => void): grpc.ClientUnaryCall;
    public output(request: output_pb.OutputRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: output_pb.OutputResponse) => void): grpc.ClientUnaryCall;
}

// package: services.test.v1
// file: services/test/v1/test.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as services_test_v1_test_pb from "../../../services/test/v1/test_pb";

interface ITestServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    sayHello: ITestServiceService_ISayHello;
}

interface ITestServiceService_ISayHello extends grpc.MethodDefinition<services_test_v1_test_pb.SayHelloRequest, services_test_v1_test_pb.SayHelloResponse> {
    path: "/services.test.v1.TestService/SayHello";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<services_test_v1_test_pb.SayHelloRequest>;
    requestDeserialize: grpc.deserialize<services_test_v1_test_pb.SayHelloRequest>;
    responseSerialize: grpc.serialize<services_test_v1_test_pb.SayHelloResponse>;
    responseDeserialize: grpc.deserialize<services_test_v1_test_pb.SayHelloResponse>;
}

export const TestServiceService: ITestServiceService;

export interface ITestServiceServer extends grpc.UntypedServiceImplementation {
    sayHello: grpc.handleUnaryCall<services_test_v1_test_pb.SayHelloRequest, services_test_v1_test_pb.SayHelloResponse>;
}

export interface ITestServiceClient {
    sayHello(request: services_test_v1_test_pb.SayHelloRequest, callback: (error: grpc.ServiceError | null, response: services_test_v1_test_pb.SayHelloResponse) => void): grpc.ClientUnaryCall;
    sayHello(request: services_test_v1_test_pb.SayHelloRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: services_test_v1_test_pb.SayHelloResponse) => void): grpc.ClientUnaryCall;
    sayHello(request: services_test_v1_test_pb.SayHelloRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: services_test_v1_test_pb.SayHelloResponse) => void): grpc.ClientUnaryCall;
}

export class TestServiceClient extends grpc.Client implements ITestServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public sayHello(request: services_test_v1_test_pb.SayHelloRequest, callback: (error: grpc.ServiceError | null, response: services_test_v1_test_pb.SayHelloResponse) => void): grpc.ClientUnaryCall;
    public sayHello(request: services_test_v1_test_pb.SayHelloRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: services_test_v1_test_pb.SayHelloResponse) => void): grpc.ClientUnaryCall;
    public sayHello(request: services_test_v1_test_pb.SayHelloRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: services_test_v1_test_pb.SayHelloResponse) => void): grpc.ClientUnaryCall;
}

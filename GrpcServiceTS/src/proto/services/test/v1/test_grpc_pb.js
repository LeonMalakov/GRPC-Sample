// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var services_test_v1_test_pb = require('../../../services/test/v1/test_pb.js');

function serialize_services_test_v1_SayHelloRequest(arg) {
  if (!(arg instanceof services_test_v1_test_pb.SayHelloRequest)) {
    throw new Error('Expected argument of type services.test.v1.SayHelloRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_services_test_v1_SayHelloRequest(buffer_arg) {
  return services_test_v1_test_pb.SayHelloRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_services_test_v1_SayHelloResponse(arg) {
  if (!(arg instanceof services_test_v1_test_pb.SayHelloResponse)) {
    throw new Error('Expected argument of type services.test.v1.SayHelloResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_services_test_v1_SayHelloResponse(buffer_arg) {
  return services_test_v1_test_pb.SayHelloResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var TestServiceService = exports.TestServiceService = {
  sayHello: {
    path: '/services.test.v1.TestService/SayHello',
    requestStream: false,
    responseStream: false,
    requestType: services_test_v1_test_pb.SayHelloRequest,
    responseType: services_test_v1_test_pb.SayHelloResponse,
    requestSerialize: serialize_services_test_v1_SayHelloRequest,
    requestDeserialize: deserialize_services_test_v1_SayHelloRequest,
    responseSerialize: serialize_services_test_v1_SayHelloResponse,
    responseDeserialize: deserialize_services_test_v1_SayHelloResponse,
  },
};

exports.TestServiceClient = grpc.makeGenericClientConstructor(TestServiceService);

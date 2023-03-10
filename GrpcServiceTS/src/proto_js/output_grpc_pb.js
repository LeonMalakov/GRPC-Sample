// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var output_pb = require('./output_pb.js');

function serialize_output_SomeFunctionRequest(arg) {
  if (!(arg instanceof output_pb.SomeFunctionRequest)) {
    throw new Error('Expected argument of type output.SomeFunctionRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_output_SomeFunctionRequest(buffer_arg) {
  return output_pb.SomeFunctionRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_output_SomeFunctionResponse(arg) {
  if (!(arg instanceof output_pb.SomeFunctionResponse)) {
    throw new Error('Expected argument of type output.SomeFunctionResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_output_SomeFunctionResponse(buffer_arg) {
  return output_pb.SomeFunctionResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var OutputService = exports.OutputService = {
  someFunction: {
    path: '/output.Output/SomeFunction',
    requestStream: false,
    responseStream: false,
    requestType: output_pb.SomeFunctionRequest,
    responseType: output_pb.SomeFunctionResponse,
    requestSerialize: serialize_output_SomeFunctionRequest,
    requestDeserialize: deserialize_output_SomeFunctionRequest,
    responseSerialize: serialize_output_SomeFunctionResponse,
    responseDeserialize: deserialize_output_SomeFunctionResponse,
  },
  someFunctionOutStream: {
    path: '/output.Output/SomeFunctionOutStream',
    requestStream: false,
    responseStream: true,
    requestType: output_pb.SomeFunctionRequest,
    responseType: output_pb.SomeFunctionResponse,
    requestSerialize: serialize_output_SomeFunctionRequest,
    requestDeserialize: deserialize_output_SomeFunctionRequest,
    responseSerialize: serialize_output_SomeFunctionResponse,
    responseDeserialize: deserialize_output_SomeFunctionResponse,
  },
  someFunctionInStream: {
    path: '/output.Output/SomeFunctionInStream',
    requestStream: true,
    responseStream: false,
    requestType: output_pb.SomeFunctionRequest,
    responseType: output_pb.SomeFunctionResponse,
    requestSerialize: serialize_output_SomeFunctionRequest,
    requestDeserialize: deserialize_output_SomeFunctionRequest,
    responseSerialize: serialize_output_SomeFunctionResponse,
    responseDeserialize: deserialize_output_SomeFunctionResponse,
  },
};

exports.OutputClient = grpc.makeGenericClientConstructor(OutputService);

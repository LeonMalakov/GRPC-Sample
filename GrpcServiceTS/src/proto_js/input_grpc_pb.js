// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var input_pb = require('./input_pb.js');

function serialize_input_SomeFunctionRequest(arg) {
  if (!(arg instanceof input_pb.SomeFunctionRequest)) {
    throw new Error('Expected argument of type input.SomeFunctionRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_input_SomeFunctionRequest(buffer_arg) {
  return input_pb.SomeFunctionRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_input_SomeFunctionResponse(arg) {
  if (!(arg instanceof input_pb.SomeFunctionResponse)) {
    throw new Error('Expected argument of type input.SomeFunctionResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_input_SomeFunctionResponse(buffer_arg) {
  return input_pb.SomeFunctionResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var InputService = exports.InputService = {
  someFunction: {
    path: '/input.Input/SomeFunction',
    requestStream: false,
    responseStream: false,
    requestType: input_pb.SomeFunctionRequest,
    responseType: input_pb.SomeFunctionResponse,
    requestSerialize: serialize_input_SomeFunctionRequest,
    requestDeserialize: deserialize_input_SomeFunctionRequest,
    responseSerialize: serialize_input_SomeFunctionResponse,
    responseDeserialize: deserialize_input_SomeFunctionResponse,
  },
};

exports.InputClient = grpc.makeGenericClientConstructor(InputService);

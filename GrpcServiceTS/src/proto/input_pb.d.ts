// package: input
// file: input.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class SomeFunctionRequest extends jspb.Message { 
    getData(): string;
    setData(value: string): SomeFunctionRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SomeFunctionRequest.AsObject;
    static toObject(includeInstance: boolean, msg: SomeFunctionRequest): SomeFunctionRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SomeFunctionRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SomeFunctionRequest;
    static deserializeBinaryFromReader(message: SomeFunctionRequest, reader: jspb.BinaryReader): SomeFunctionRequest;
}

export namespace SomeFunctionRequest {
    export type AsObject = {
        data: string,
    }
}

export class SomeFunctionResponse extends jspb.Message { 
    getData(): string;
    setData(value: string): SomeFunctionResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SomeFunctionResponse.AsObject;
    static toObject(includeInstance: boolean, msg: SomeFunctionResponse): SomeFunctionResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SomeFunctionResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SomeFunctionResponse;
    static deserializeBinaryFromReader(message: SomeFunctionResponse, reader: jspb.BinaryReader): SomeFunctionResponse;
}

export namespace SomeFunctionResponse {
    export type AsObject = {
        data: string,
    }
}

// package: input
// file: input.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class InputRequest extends jspb.Message { 
    getData(): string;
    setData(value: string): InputRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): InputRequest.AsObject;
    static toObject(includeInstance: boolean, msg: InputRequest): InputRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: InputRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): InputRequest;
    static deserializeBinaryFromReader(message: InputRequest, reader: jspb.BinaryReader): InputRequest;
}

export namespace InputRequest {
    export type AsObject = {
        data: string,
    }
}

export class InputResponse extends jspb.Message { 
    getData(): string;
    setData(value: string): InputResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): InputResponse.AsObject;
    static toObject(includeInstance: boolean, msg: InputResponse): InputResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: InputResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): InputResponse;
    static deserializeBinaryFromReader(message: InputResponse, reader: jspb.BinaryReader): InputResponse;
}

export namespace InputResponse {
    export type AsObject = {
        data: string,
    }
}

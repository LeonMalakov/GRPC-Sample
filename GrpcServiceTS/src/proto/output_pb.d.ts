// package: output
// file: output.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class OutputRequest extends jspb.Message { 
    getData(): string;
    setData(value: string): OutputRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): OutputRequest.AsObject;
    static toObject(includeInstance: boolean, msg: OutputRequest): OutputRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: OutputRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): OutputRequest;
    static deserializeBinaryFromReader(message: OutputRequest, reader: jspb.BinaryReader): OutputRequest;
}

export namespace OutputRequest {
    export type AsObject = {
        data: string,
    }
}

export class OutputResponse extends jspb.Message { 
    getData(): string;
    setData(value: string): OutputResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): OutputResponse.AsObject;
    static toObject(includeInstance: boolean, msg: OutputResponse): OutputResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: OutputResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): OutputResponse;
    static deserializeBinaryFromReader(message: OutputResponse, reader: jspb.BinaryReader): OutputResponse;
}

export namespace OutputResponse {
    export type AsObject = {
        data: string,
    }
}

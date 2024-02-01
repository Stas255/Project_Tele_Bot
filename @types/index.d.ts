import { ErrorDetail } from "./error";

//----------IPC INVOKE Angular->INVOKE Electron->RETURN------------------------------//
export type TypesInputInvoke = {
    getSomeData: boolean,
}

export type TypesReturnInvoke = {
    getSomeData: number,
}

export type TypesInputKeysInvoke = keyof TypesInputInvoke;

export type FunctionMapInvoke = {
    [K in keyof TypesInputInvoke]: (arrgument: TypesInputInvoke[TypesInputKeysInvoke]) => Promise<TypesReturnInvoke[K]>;
};

//----------IPC SEND Electron->SEND Angular->ON------------------------------//
export type TypesReturnSend = {
    receiveError: ErrorDetail,
}

export type TypesReturnKeysSend = keyof TypesReturnSend;

export type FunctionMapSend = {
    [K in keyof TypesReturnSend]: (callback: (arrgument: TypesReturnSend[K]) => void) => void;
};

//----------IPC ON Angular->SEND Electron->ON------------------------------//

export type TypesSendToMain = {
    sendError: ErrorDetail
}

export type TypesSendKeysToMain = keyof TypesSendToMain;

export type FunctionMapSendToMain = {
    [K in keyof TypesSendToMain]: (arrgument: TypesSendToMain[K]) => void;
};
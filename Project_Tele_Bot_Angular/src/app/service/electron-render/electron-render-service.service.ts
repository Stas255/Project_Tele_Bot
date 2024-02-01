import { Injectable } from '@angular/core';
import { FunctionMapInvoke, TypesInputInvoke, TypesReturnKeysSend, TypesReturnInvoke, TypesReturnSend, FunctionMapSend, TypesSendKeysToMain, TypesSendToMain, FunctionMapSendToMain } from 'Types/index';

declare global {
  interface Window {
    electronRenderInvoke: any;
    electronRenderSend: any;
    electronRenderSendToMain: any
  }
}

@Injectable({
  providedIn: 'root'
})
export class ElectronRenderService {

  /*private renderApiInvoke: FunctionMapInvoke = window.electronRenderInvoke;
  private renderApiSend: FunctionMapSend = window.electronRenderSend;
  private electronRenderSendToMain: FunctionMapSendToMain = window.electronRenderSendToMain;
  
  callFunction<K extends keyof FunctionMapInvoke>(functionName: K, arg: TypesInputInvoke[K]): Promise<TypesReturnInvoke[K]> {
    const func = this.renderApiInvoke[functionName];
    if (!func) {
      throw new Error(`Функція ${functionName} не знайдена`);
    }
    return func(arg);
  }

  listenToMainProcess<K extends TypesReturnKeysSend>(messageKey: K, callback: (data: TypesReturnSend[K]) => void): void {
    const func = this.renderApiSend[messageKey];
    if (!func) {
      throw new Error(`Listener for message key ${messageKey} not found`);
    }
    func(callback);
  }

  sendToMainProcess<K extends TypesSendKeysToMain>(messageKey: K, data: TypesSendToMain[K]): void {
    const func = this.electronRenderSendToMain[messageKey];
    if (!func) {
        throw new Error(`Send function for message key ${messageKey} not found`);
    }
    func(data);
}*/
}

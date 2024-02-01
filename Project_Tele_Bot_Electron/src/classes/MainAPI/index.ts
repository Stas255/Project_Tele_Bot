import { ipcMain } from "electron";
import { TypesInputKeysInvoke, TypesInputInvoke, TypesReturnInvoke, TypesReturnKeysSend, TypesReturnSend, TypesSendKeysToMain, TypesSendToMain } from 'Types/index';

export class MainAPI {

    createIpcMainHandle<K extends TypesInputKeysInvoke>
        (channel: K, listener: (event: Electron.IpcMainInvokeEvent, arg: TypesInputInvoke[K]) => Promise<TypesReturnInvoke[K]>) {
        ipcMain.handle(channel, listener);
    }

    IpcMainSend<K extends TypesReturnKeysSend>
        (channel: K, webContents: Electron.WebContents, arg: TypesReturnSend[K]) {
        webContents.send(channel, arg);
    }

    IpcMainOn<K extends TypesSendKeysToMain>
        (channel: K, listener: (event: Electron.IpcMainInvokeEvent, arg: TypesSendToMain[K]) => void) {
        ipcMain.on(channel, listener);
    }
}

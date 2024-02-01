import { FunctionMapInvoke, FunctionMapSend, FunctionMapSendToMain, TypesInputInvoke, TypesInputKeysInvoke, TypesReturnKeysSend, TypesReturnSend, TypesSendKeysToMain, TypesSendToMain } from 'Types/index';
import { contextBridge, ipcRenderer } from 'electron';

contextBridge.exposeInMainWorld("electronRenderInvoke", getRenderInvoke());

contextBridge.exposeInMainWorld("electronRenderSend", getRenderOn());

contextBridge.exposeInMainWorld("electronRenderSendToMain", getSendToMain());

function getRenderInvoke(): FunctionMapInvoke {
  let obj: Partial<FunctionMapInvoke> = {};
  const arrayHandels: Array<TypesInputKeysInvoke> = [
      "getSomeData",
  ]
  arrayHandels.forEach(element => {
      obj[element] = (arrgument: TypesInputInvoke[typeof element]) =>
          ipcRenderer.invoke(element, arrgument);
  });
  return obj as FunctionMapInvoke;
}

function getRenderOn(): FunctionMapSend {
  let obj: Partial<FunctionMapSend> = {};
  const eventHandlers: Array<TypesReturnKeysSend> = [
      "receiveError",
  ];

  eventHandlers.forEach(element => {
      obj[element] = (callback: (arrgument: any) => void) => ipcRenderer.on(element, (event, data: TypesReturnSend[typeof element]) => callback(data));
  });

  return obj as FunctionMapSend;
}


function getSendToMain(): FunctionMapSendToMain {
  let obj: Partial<FunctionMapSendToMain> = {};
  const eventHandlers: Array<TypesSendKeysToMain> = [
      "sendError"
  ];

  eventHandlers.forEach(element => {
      obj[element] = (arrgument: TypesSendToMain[typeof element]) => ipcRenderer.send(element, arrgument);
  });

  return obj as FunctionMapSendToMain;
}
import { app, BrowserWindow, ipcMain } from "electron";
import path from "node:path";
import { MainAPI } from "./classes/MainAPI";

let mainWindow: BrowserWindow;
const mainAPI = new MainAPI();

async function createWindows() {
    mainWindow = new BrowserWindow({
        width: 900, height: 900,
        webPreferences: {
            preload: path.join(__dirname, "/preload.js"),
            //nodeIntegration: true,
        },
        show: false
    });

    //mainWindow.loadFile(path.join(__dirname + "/browser/index.html"));
    await mainWindow.loadURL('http://localhost:4200/');
    mainWindow.webContents.openDevTools();
    mainWindow.show();
    //mainWindow.on("ready-to-show", () => mainWindow.show());
}

app.whenReady().then(async () => {
    await createWindows()
    mainAPI.createIpcMainHandle("getSomeData", async (event, arg) => {
        return 54;
    });
})
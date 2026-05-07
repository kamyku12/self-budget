import { app, BrowserWindow, ipcMain } from "electron";
import path from "path";

let win: BrowserWindow | null;

const createWindow = () => {
  win = new BrowserWindow({
    webPreferences: {
      preload: path.join(import.meta.dirname, "preload.js"),
    },
    show: false,
  });

  win.loadFile(path.join(import.meta.dirname, "index.html"));
};

app.whenReady().then(() => {
  ipcMain.handle("ping", () => "pong");

  createWindow();
});

import { BrowserWindow } from 'electron';

let win: BrowserWindow;
const isDev = process.env.NODE_ENV === 'development';

export const onReady = () => {
  win = new BrowserWindow({
    resizable: false,
    width: 300,
    height: 200,
    frame: false,
    webPreferences: {
      nodeIntegration: true
    }
  });
  win.setMenuBarVisibility(false);
  const url = isDev ? 'http://localhost:4200' : `file://${__dirname}/index.html`;
  win.loadURL(url);
};

const { app, BrowserWindow } = require("electron");
const url = require('url');
const path = require('path')

let win;

const createWindow = () => {
  win = new BrowserWindow({
    // width: 900,
    // height: 700,
    webPreferences: {
      nodeIntegration: true,
    }
  })

  win.maximize();

  win.loadURL(url.format({
    pathname: path.join(__dirname, '/app/welcome_page.html'),
    protocol: "file:",
    slashes: true
  }))

  win.openDevTools();
}

app.on('ready', createWindow);


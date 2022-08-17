const fs = require('fs');
const reloader   = require('electron-reloader');
const electron   = require('electron');
const appMenu    = require('./app/menu.js');
const mainWindow = require('./app/window.js');
const remote     = require('@electron/remote/main');

// remote.initialize();

try {
    reloader(module);
} catch (_) {}

global.appDirPath = electron.app.getAppPath();

electron.app.whenReady().then(mainWindow);

remote.enable(mainWindow().webContents);

// .then(() => new electron.Tray('./src/images/logo.jpg'))

electron.app.on('window-all-closed', () => electron.app.quit());

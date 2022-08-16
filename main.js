const fs = require('fs');
const reloader   = require('electron-reloader');
const electron   = require('electron');
const appMenu    = require('./app/menu.js');
const mainWindow = require('./app/window.js');

try {
    reloader(module);
} catch (_) {}

global.appDirPath = electron.app.getAppPath();

electron.app.whenReady().then(mainWindow);

// .then(() => new electron.Tray('./src/images/logo.jpg'))

electron.app.on('window-all-closed', () => electron.app.quit());

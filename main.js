const path       = require('path');
const fs         = require('fs');
const hotReload  = require('electron-reload');
const electron   = require('electron');
const appMenu    = require('./app/menu.js');
const mainWindow = require('./app/window.js');

hotReload(__dirname);

electron.app.on('ready', function () {
    electron.Menu.setApplicationMenu(appMenu);
    mainWindow();
    new electron.Tray('./src/images/icons/main.jpg');
});

electron.app.on('window-all-closed', function () {
    electron.app.quit();
});

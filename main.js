const fs = require('fs');
const path = require('path');
const { app } = require('electron');
const mainWindow = require('./app/window.js');
require('@electron/remote/main').initialize()
require('electron-reload')(__dirname, {
    electron: path.join(__dirname, 'node_modules', '.bin', 'electron')
});

app.whenReady().then(function () {
    mainWindow();
});

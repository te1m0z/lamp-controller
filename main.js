const { app, BrowserWindow } = require('electron');
const path = require('path');

// Enable live reload for Electron
require('electron-reload')(__dirname, {
    electron: require(`${__dirname}/node_modules/electron`)
});

function createWindow() {

    const win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            preload: path.join(__dirname, 'src/windows/main/main.controller.js')
        },
        icon: __dirname + '/src/images/icons/main.jpg'
    });

    win.loadFile('src/windows/main/index.html');
    win.openDevTools();
}

app.on('ready', function () {
    createWindow();
});

app.on('window-all-closed', function () {
    if (process.platform !== 'darwin') app.quit();
});

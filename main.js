const path = require('path');

require('electron-reload')(__dirname, {
    electron: require(`${__dirname}/node_modules/electron`)
});

const { app, BrowserWindow } = require('electron');

function createWindow() {

    const win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            preload: path.join(__dirname, 'src/windows/main/main.controller.js')
        },
        icon: __dirname + '/src/images/icons/main.jpg',
        autoHideMenuBar: true,
        resizable: false
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

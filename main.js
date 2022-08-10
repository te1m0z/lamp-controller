const { app, BrowserWindow } = require('electron');
const path = require('path');


const createWindow = function() {

    const win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            preload: path.join(__dirname, 'src/js/preload.js')
        }
    });

    win.loadFile('src/html/index.html');
}

app.whenReady().then(function () {
    createWindow();
});

app.on('window-all-closed', function() {
    if (process.platform !== 'darwin') app.quit();
});
const { BrowserWindow, app } = require('electron');

const mainWindow = function() {
    
    const win = new BrowserWindow({
        width: 600,
        height: 600,
        icon: app.getAppPath() + '/src/images/logo.jpg',
        resizable: false,
        autoHideMenuBar: true,
        frame: false,
        useContentSize: true,
        webPreferences: {
            nodeIntegration: true,
            enableRemoteModule: true,
            contextIsolation: false
        }
    });

    win.webContents.openDevTools();

    require('@electron/remote/main').enable(win.webContents);
    win.loadFile(app.getAppPath() + '/src/index.html');
    return win;
}

module.exports = mainWindow;

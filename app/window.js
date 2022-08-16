const { BrowserWindow } = require('electron');

const mainWindow = function() {
    const win = new BrowserWindow({
        width: 600,
        height: 600,
        icon: global.appDirPath + '/src/images/logo.jpg',
        resizable: false,
        autoHideMenuBar: true,
        frame: false
    });

    win.webContents.openDevTools();
    
    win.loadFile(global.appDirPath + '/src/windows/main/index.html');
}

module.exports = mainWindow;

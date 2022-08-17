const { BrowserWindow } = require('electron');
const main = require('@electron/remote/main');

const mainWindow = function() {
    const win = new BrowserWindow({
        width: 600,
        height: 600,
        icon: __dirname + '/../src/images/logo.jpg',
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

    console.log(main)

    main.initialize();
    main.enable(win.webContents);

    win.webContents.openDevTools();
    
    win.loadFile(global.appDirPath + '/src/index.html');

    return win;
}

module.exports = mainWindow;

const { BrowserWindow } = require('electron');

const mainWindow = function() {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        icon: __dirname + '/../src/images/icons/main.jpg',
        resizable: false,
        // autoHideMenuBar: true,
    });
    
    win.loadFile(__dirname + '/../src/windows/main/index.html');
}

module.exports = mainWindow;

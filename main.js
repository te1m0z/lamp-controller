const fs = require('fs');
const path = require('path');
const { app } = require('electron');
const mainWindow = require('./app/window.js');
require('@electron/remote/main').initialize();
require('electron-reload')(__dirname, {
    electron: path.join(__dirname, 'node_modules', '.bin', 'electron')
});

async function t() {
    var Sudoer = require('electron-sudo').default;

    let options = { name: 'electron sudo application' }, sudoer = new Sudoer(options);

    /* Spawn subprocess behavior */
    let cp = await sudoer.spawn(
        'echo', ['$PARAM'], { env: { PARAM: 'VALUE' } }
    );
    cp.on('close', () => {
        /*
          cp.output.stdout (Buffer)
          cp.output.stderr (Buffer)
        */
    });
}

app.whenReady().then(function () {
    mainWindow();

    t();
});

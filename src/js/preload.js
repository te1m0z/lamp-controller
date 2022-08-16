const electron = require('electron');

console.log(electron)

document.addEventListener('DOMContentLoaded', function() {
    const closeApp = document.getElementById('closeApp');

    console.log(closeApp);

    closeApp.addEventListener('click', () => {
        electron.ipcRenderer.send('close-me');
    });
});

const remote = require('@electron/remote');
const appPath = remote.app.getAppPath();

const Domain = require(appPath + '/app/domains/Domain.js');
const API = require(appPath + '/modules/API.js');

const closeButton = document.getElementById('closeApp');
const reloadButton = document.getElementById('reloadApp');
const dev = document.getElementById('openDevTools');


closeButton.onclick = () => remote.app.quit();

reloadButton.onclick = () => {
    remote.app.relaunch();
    remote.app.quit();
}

dev.onclick = () => {
    remote.getCurrentWebContents().openDevTools();
}


const section = new Domain();

const api = new API().init();

console.log(new API())

document.getElementById('domains-area').innerHTML = section.fileContent;

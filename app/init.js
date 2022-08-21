const { app } = require('electron');

class lap_init {
    constructor() {
        
        const lap_domain = require('./domains/domain.js');

        const appDomain = new lap_domain();

        const hostsFileContent = appDomain.fileContent;

        console.log('hostsFileContent: ', hostsFileContent);
    }
}


module.exports = lap_init;

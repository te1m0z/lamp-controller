const remote = require('@electron/remote');
const appPath = remote.app.getAppPath();
const DB = require(appPath + '/modules/DB.js');

class API {

    static _instance = null;

    db = null;

    constructor() {
        console.log('API.js constructor')

        if (!API._instance) {
            API._instance = this;
        }
        return API._instance;
    }

    init() {
        this.db = new DB().connect();
    }

    query(command, method = 'all') {
        return new Promise((resolve, reject) => {
            this.db[method](command, (error, result) => {
                if (error) {
                    reject(error);
                } else {
                    resolve(result);
                }
            });
        });
    }
}


module.exports = API;
const sqlite3 = require('sqlite3');
const remote = require('@electron/remote');
const appPath = remote.app.getAppPath();
const API = require(appPath + '/modules/API.js');

class DB {

    static _instance = null;

    SQLite3 = null;
    db = null;
    api = null;

    constructor() {
        console.log('DB.js constructor')

        if (!DB._instance) {
            DB._instance = this;
        }
        return DB._instance;
    }

    connect() {
        this.SQLite3 = sqlite3.verbose();
        this.db = new this.SQLite3.Database(appPath + '/db/cnf.db');
        this.api = new API().init();
        db.serialize(async () => {
            await this.api.query(`
                CREATE TABLE IF NOT EXISTS posts (
                    date text,
                    title text,
                    author text,
                    content text,
                    tags text
                )`,
            'run');
        });
    }
}

module.exports = DB;
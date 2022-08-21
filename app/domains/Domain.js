const fs = require('fs');
const remote = require('@electron/remote');
const appPath = remote.app.getAppPath();
const Parser = require(appPath + '/modules/Parser.js');
const { exec } = require('child_process');

class Domain {

    fileContent = null;
    hostsPath = '/etc/hosts';
    hostsStartPrefix = '#LAP Controller domains start';
    hostsEndPrefix = '#LAP Controller domains end';

    constructor() {

        console.log('construct Domain ...')

        let sectionExists = this.getDomainSectionContent();

        if (sectionExists === false) {
            this.fileContent = 'функция парсинга отработала неправильно';
            return;
        }

        if (sectionExists === 404) {
            this.fileContent =  this.createSection();
            return;
        }

        this.fileContent = sectionExists;
    }

    getHostsContent() {
        return fs.readFileSync(
            this.hostsPath,
            'utf8'
        );
    }

    getDomainSectionContent() {
        const parser = new Parser();
        const content = this.getHostsContent()

        return parser.parse(
            content,
            this.hostsStartPrefix,
            this.hostsEndPrefix
        );
    }

    createSection() {
        const parser = new Parser();
        const content = this.getHostsContent()

        const text = parser.append(
            content,
            this.generateSection()
        );

        let result;

        exec(`sudo chmod ugo+rwx ${this.hostsPath}`, (error, stdout, stderr) => {

            if (error) {
                console.error(`error: ${error.message}`);
                return;
            }

            if (stderr) {
                console.error(`stderr: ${stderr}`);
                return;
            }

            result = fs.writeFile(this.hostsPath, text, function (error) {
                if (error) throw error;
                console.log('Данные успешно записаны записать файл');
            });
        });

        return result;
    }

    generateSection() {
        return `\n${this.hostsStartPrefix}\n\n\n${this.hostsEndPrefix}\n`;
    }
}


module.exports = Domain;

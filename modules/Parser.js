

class Parser {

    constructor() {
        console.log('Parser.js constructor')
    }

    parse(file_content, start, end) {

        if (!file_content || !start || !end) {
            return false;
        }

        const startIndex = file_content.indexOf(start);
        const endIndex   = file_content.indexOf(end) + 27;

        if (startIndex == '-1' || endIndex == '-1') {
            return 404;
        }

        return file_content.substring(startIndex, endIndex);
    }

    append(file_content, append_content) {
        return file_content += append_content;
    }
}

module.exports = Parser;
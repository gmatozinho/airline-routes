const fs = require('fs');
var path = require('path');


/**
 * Read file and return string with file content
 */
const readFile = (filename) => {
    var fileContent;

    return new Promise(function (resolve) {
        fileContent = fs.readFileSync(path.join(__dirname, `../${filename}`), { encoding: 'utf8' });
        resolve(fileContent);
    });
}

/**
 * Write route on file
 */
const writeLine = (string, filename) => {

    return fs.appendFileSync(path.join(__dirname, `../${filename}`), string);
}




module.exports = {
    readFile,
    writeLine
}
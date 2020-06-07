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
 * Read route and return object with origin and destiny
 */
const readRoute = (string) => {
    const array = string.split("-")
    return { origin: array[0], destiny: array[1] }

}


/**
 * Write route on file
 */
const writeLine = (string, filename) => {

    return fs.appendFileSync(path.join(__dirname, `../${filename}`), string);
}




module.exports = {
    readFile,
    readRoute, 
    writeLine
}
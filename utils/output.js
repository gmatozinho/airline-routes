
/**
 * Format result string
 */
const formatResult = (result) => {
    let string = '';

    result.path.forEach((elem) => {
        string += elem
        if (elem !== result.path[result.path.length - 1]) {
            string += " - "

        }
    })

    string += ` > $${result.distance}`

    return string;

}


module.exports = {
    formatResult
}
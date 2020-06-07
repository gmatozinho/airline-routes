const { file, graph, output } = require('../utils');

const bestRoute = async ({ origin, destiny }) => {

    try {
        const filename = process.argv[2] || 'input-routes.csv';
        if (!filename) {
            throw new Error("Filename not found!")
        }
        const inputFile = await file.readFile(filename);
        const routesGraph = graph.build(inputFile);
        const shortestPath = graph.findShortestPath(routesGraph, origin, destiny);
        const outputMessage = output.formatResult(shortestPath)

        const response = {
            "best-route": outputMessage
        }

        return [null, response]

    } catch (error) {
        return [error, null]

    }

}


const createRoute = ({ origin, destiny, price }) => {
    try {
        const filename = process.argv[2] || 'input-routes.csv';
        if (!filename) {
            throw new Error("Filename not found!")
        }

        const line = `\n${origin},${destiny},${price}`
        file.writeLine(line, filename)
        const response = {
            insertedLine: `${origin},${destiny},${price}`
        }
        return [null, response]

    } catch (error) {
        return [error, null]

    }


}


module.exports = {
    bestRoute,
    createRoute
}



#!/usr/bin/env node
const process = require('process');
const readline = require('readline');
const { file, graph, output } = require('../utils');

var log = console.log;
var routesGraph;

/**
 * Init bash app to find best route
 */
const main = async () => {
    const filename = process.argv[2];
    if (!filename) {
        log("Filename not found!")
    }
    const inputFile = await file.readFile(filename);
    routesGraph = graph.build(inputFile);
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
    recursiveAsyncReadLine(rl);
}

const recursiveAsyncReadLine = (readline) => {
    readline.question('please enter the route:', (input) => {
        if (input == 'exit')
            return readline.close();
        const routes = file.readRoute(input)
        const shortestPath = graph.findShortestPath(routesGraph, routes.origin, routes.destiny);
        const outputMessage = output.formatResult(shortestPath)
        log(`best route: ${outputMessage}`);
        recursiveAsyncReadLine(readline);
    });
};

module.exports = {
    main
}
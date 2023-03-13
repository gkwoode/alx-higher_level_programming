#!/usr/bin/node

const argument = process.argv.slice(2);

console.log(argument.length === 0 ? "No argument" : argument.length === 1 ? "Argument found" : "Arguments found");

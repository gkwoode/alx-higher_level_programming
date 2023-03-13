#!/usr/bin/node

const [arg] = process.argv.slice(2);

console.log(arg === undefined ? "No argument" : arg);

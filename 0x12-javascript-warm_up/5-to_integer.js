#!/usr/bin/node

const [arg] = process.argv.slice(2);
const num = parseInt(arg);

console.log(Number.isNaN(num) ? "Not a number" : `My number: ${num}`);

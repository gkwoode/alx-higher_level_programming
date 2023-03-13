#!/usr/bin/node

const [arg] = process.argv.slice(2);
const num = parseInt(arg);

if (Number.isNaN(num)) {
  console.log("Missing number of occurrences");
} else {
  for (let i = 0; i < num; i++) {
    console.log("C is fun");
  }
}

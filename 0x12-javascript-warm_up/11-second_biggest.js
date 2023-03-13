#!/usr/bin/node

const args = process.argv.slice(2);

if (args.length <= 1) {
  console.log(0);
} else {
  const intArgs = args.map(arg => parseInt(arg));
  const sortedIntArgs = intArgs.sort((a, b) => b - a);
  console.log(sortedIntArgs[1]);
}

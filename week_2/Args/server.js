// process.argv.forEach((val, index) => {
// 	console.log(`${index}: ${val}`);
// });

// const args = process.argv.slice(2);
// console.log(args[0]);

// node server.js --name=rau
const argsv = require('minimist')(process.argv.slice(2));
console.log(argsv['name']);

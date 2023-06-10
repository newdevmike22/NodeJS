/*
const amount = 12;

if (amount < 10) {
    console.log("small number");
} else {
    console.log('large number');
}

console.log(`Hey it's my first node app!`);
*/

/*
GLOBALS  - NO WINDOW !!!!

// __dirname  - path to current directory
// __filename - file name
// require    - function to use modules (CommonJS)
// module     - info about current module (file)
// process    - info about env where the program is being executed

console.log(__dirname);

setInterval(() => {
    console.log("Make my funk the P Funk!")
}, 2000)
*/

// Modules
const names = require('./names');
const sayHi = require('./utils');
const data = require('data');

sayHi("Liz");
sayHi(names.Chuck);
sayHi(names.Spike);

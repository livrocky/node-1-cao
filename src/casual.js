//import casual
const casual = require("casual");

const city1 = casual.city;
const random = Math.floor(Math.random(casual.random) * 10 + 1);
console.log("city1===", city1, "and random number 1-10===", random);

const name = casual.first_name;
const lname = casual.last_name;
const prefix = casual.name_prefix;

console.log(`My name is ${prefix} ${name} ${lname}`);

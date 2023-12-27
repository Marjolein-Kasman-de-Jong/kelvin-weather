// Today's temperature forecast in Kelvin
const kelvin = 0;

// Today's temperature forecast in Celsius
const celsius = kelvin - 273;

// Today's temperature forecast in Fahrenheit
let fahrenheit = celsius * (9/5) + 32;

// Today's temperature forecast in Fahrenheit rounded down
fahrenheit = Math.floor(fahrenheit);

console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);

// Today's temperature forecast in Newton
let newton = celsius * (33/100);

// Today's temperature forecast in Newton rounded down
newton = Math.floor(newton);

console.log(`The temperature is ${newton} degrees Newton.`);
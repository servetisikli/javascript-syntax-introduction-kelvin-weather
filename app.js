// This is today's forecast.
const kelvin = 293;

// This is Celsius
const Celsius = kelvin - 273;

// Fahrenheit and floor type
let temprature = Math.floor(Celsius * (9 / 5) + 32);

// Floor type
console.log(`The temperature is ${temprature} degrees Fahrenheit.`)
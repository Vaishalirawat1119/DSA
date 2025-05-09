let celsius = 32;
let fahrenheit = (celsius * 9/5) + 32;
console.log(`${celsius} Celsius is equal to ${fahrenheit} fahrenheit` );

// let make function to convert celsius to fahrenheit

let C = 231;
let celsiusToFahrenheit = (C) => {
    return (C * 9/5) + 32;
}
console.log(`${C} Celsius is equal to ${celsiusToFahrenheit(C)} fahrenheit` );

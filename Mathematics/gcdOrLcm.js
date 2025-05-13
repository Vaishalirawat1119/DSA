let a,b;
function gcd(a,b){
    // Function to calculate the greatest common divisor (GCD) of two numbers
    while(b !== 0){ // loop continues as long as remainder(b) is not zero

        let temp = b; // Store the value of b in a temporary variable

        b = a % b; // Calculate the remainder of a divided by b
        a = temp; // Assign the value of b to a
    }
    return a;
};

function lcm(a,b){
    // Function to calculate the least common multiple (LCM) of two numbers
    return (a * b)/gcd(a,b); // Calculate LCM using the formula: (a * b) / GCD(a, b)
};

console.log(gcd(2,44));
console.log(lcm(2,44));
console.log(gcd(12,18));
console.log(lcm(12,18));
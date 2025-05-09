//using Math.abs() method
let x = -367845;
let absoluteValue = Math.abs(x);
console.log(`Absolute value of ${x} is: ${absoluteValue}`);



//using if-else statement
let y = 23451;
let absoluteValue2;
if(y > 0){
    absoluteValue2 = y;
}
else{
    absoluteValue2 = -y;
}
console.log(`Absolute value of ${y} is: ${absoluteValue2}`);



// with ternary operator
let z = 34;
let absoluteValue3 = (z > 0) ? z : -z;
console.log(`Absolute value of ${z} is: ${absoluteValue3}`);
 
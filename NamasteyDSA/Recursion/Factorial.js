function factorial(num){
    if(num === 0 || num === 1) return 1;
    return num * factorial(num-1);
}
console.log(factorial(5));
// console.log(factorial(20));
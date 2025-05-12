let n;

function factorial(n){
    if(n < 0){
        return "Factorial of negative number is not possible";
    }
    if(n ===0 || n ===1){
        return 1;
    }
    let result = 1;
    for(let i=1; i<=n; i++){
        result *= i;
    }
    return result;
}
console.log(factorial(1));
console.log(factorial(5));
console.log(factorial(12));
console.log(factorial(0));
console.log(factorial(-1));
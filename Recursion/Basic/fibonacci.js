function fibonacci(n){
    if(n===0) return 0;
    if(n===1) return 1;
    return fibonacci(n-1) + fibonacci(n-2);
};
console.log(fibonacci(6));
console.log(fibonacci(0));
console.log(fibonacci(1));
console.log(fibonacci(20));

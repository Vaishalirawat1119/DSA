let store = {};
function fib(n){
    if(n <= 1) return n;
    if(!store[n]){
        store[n] = fib(n-1) + fib(n-2);
    }
    return store[n];
}

console.log(fib(2));
console.log(fib(3));
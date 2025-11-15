function fib(n){
    let dp = [0,1];
    for(let i=2; i<=n; i++){
        dp[i] = dp[i-1] + dp[i-2];
    }
    return dp[n];
}

console.log(fib(3));
console.log(fib(5));
console.log(fib(6));
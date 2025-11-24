function coinChange(amount, coins){
    let n = coins.length;
    let dp = {};
    let fn = (remAmt) => {
        if(remAmt === 0) return 0;
        if(remAmt < 0) return -1;
        if(remAmt in dp){
            return dp[remAmt];
        }
        let minCoins = Infinity;
        for(let i=0; i<n; i++){
            let res = fn(remAmt - coins[i]);
            if(res !== -1){
                minCoins = Math.min(minCoins, 1+res);
            }
        }
        dp[remAmt] = minCoins === Infinity ? -1 : minCoins;
        return dp[remAmt];
    }
    return fn(amount);
}

console.log(coinChange(11, [1,2,5]));
console.log(coinChange(6, [1,2,5]));

function coinChange(amount, coins){
    let n = coins.length;
    let dp = new Array(amount + 1).fill(Infinity);
    dp[0] = 0;
    for(let rem=1; rem<=amount; rem++){
        for(let j=0; j<n; j++){
            let remAmt = rem - coins[j];
            if(remAmt >= 0){
                dp[rem] = Math.min(dp[rem], 1 + dp[remAmt]);
            }
        }
    }
    return dp[amount] === Infinity ? -1 : dp[amount];
}
console.log(coinChange(11, [1,2,5]));
console.log(coinChange(6, [1,2,5]));
console.log(coinChange(3, [2]));
function minCostClimbStairs(cost){
    let n = cost.length;
    let dp = [0,0];
    for(let i=2; i<=n; i++){
        dp[i] = Math.min(dp[i-1] + cost[i-1], dp[i-2] + cost[i-2]);
    }
    return dp[n];
}

console.log(minCostClimbStairs([10,15,20]));
console.log(minCostClimbStairs([1,100,1,1,1,100,1,1,100,1]));
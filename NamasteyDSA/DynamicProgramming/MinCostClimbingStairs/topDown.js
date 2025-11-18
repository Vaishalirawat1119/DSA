function minCostClimbStair(cost){
    let n = cost.length;
    let dp = {};

    function ans(i){
        if(i <= 1) return 0;
        if(dp[i] !== undefined) return dp[i];
        dp[i] = Math.min(ans(i-1) + cost[i-1], ans(i-2) + cost[i-2]);
        return dp[i];
    }
    return ans(n);
}
console.log(minCostClimbStair([10,15,20]));
console.log(minCostClimbStair([1,100,1,1,1,100,1,1,100,1]));
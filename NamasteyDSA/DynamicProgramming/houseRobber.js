function houseRobber(arr){
    let n = arr.length;
    if(n === 1) return arr[0];
    let dp = [arr[0], Math.max(arr[0], arr[1])];
    for(let i=2; i<n; i++){
        dp[i] = Math.max(arr[i] + dp[i-2], dp[i-1]);
    }
    return dp[n-1];
}
console.log(houseRobber([1,2,3,1]));
console.log(houseRobber([2,7,9,3,1]));
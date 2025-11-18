function houseRobber(arr){
    let n = arr.length;
    if(n === 1) return arr[0];
    // let dp = [arr[0], Math.max(arr[0], arr[1])];
    let p1 = p2 = 0;
    for(let i=0; i<n; i++){
        // dp[i] = Math.max(arr[i] + dp[i-2], dp[i-1]);
        let curr = Math.max(arr[i] + p2, p1);
        let temp = p1;
        p1 = curr;
        p2 = temp;
        curr++
    }
    // return dp[n-1];
    return p1;
}
console.log(houseRobber([1,2,3,1]));
console.log(houseRobber([2,7,9,3,1]));
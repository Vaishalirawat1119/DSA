function lisLength(arr){
    let n = arr.length;
    let dp = Array(n).fill(1);
    dp[0] = 1;
    let longestSequence = 1;
    for(let i=1; i<n; i++){
        for(let j=0; j<i; j++){
            if(arr[j] < arr[i]){
                dp[i] = Math.max(dp[i], dp[j] + 1);
                longestSequence = Math.max(longestSequence, dp[i]);
            }
        }
    }
    return longestSequence;
}
console.log(lisLength([10,9,2,5,3,7,101,18]));
console.log(lisLength([0,1,0,3,2,3]));
console.log(lisLength([7,7,7,7,7,7,7]));
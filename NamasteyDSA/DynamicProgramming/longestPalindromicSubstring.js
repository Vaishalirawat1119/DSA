function longestSubstring(s){
    let n = s.length;
    let dp = Array.from({length:n}, () => Array(n).fill(null));
    let ans = [0, 0];
    for(let i=0; i<n; i++){
        dp[i][i] = true;
        if(i<n-1 && s[i] === s[i+1]){
            dp[i][i+1] = true;
            ans = [i, i+1];
        }
    }
    for(let k=3; k<=n; k++){
        for(let i=0; i<=n-k; i++){
            let j = i+k-1;
            if(s[i] === s[j] && dp[i+1][j-1]){
                dp[i][j] = true;
                ans = [i, j];
            }
        }
    }
    return s.substring(ans[0], ans[1] + 1);
}
console.log(longestSubstring("babad"));
console.log(longestSubstring("cbbd"));
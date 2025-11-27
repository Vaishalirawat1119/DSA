function decodeWay(s){
    let dp = {};
    let fn = (remS) => {
        if(remS === '') return 1;
        if(remS in dp) return dp[remS];
        let n = remS.length;
        let oneDigit = remS.substring(n-1);
        let twoDigit = remS.substring(n-2);
        let ans = 0;
        if(oneDigit !== '0'){
            ans += fn(remS.substring(0, n-1));
        }
        if(twoDigit >= 10 && twoDigit <= 26){
            ans += fn(remS.substring(0, n-2));
        }
        dp[remS] = ans;
        return ans;
    }
    return fn(s);
}
console.log(decodeWay("12"));
console.log(decodeWay("226"));
console.log(decodeWay("1325"));
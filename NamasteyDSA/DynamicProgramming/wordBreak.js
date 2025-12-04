function wordBreak(s, wordDict){
    let dp = {};
    let fn = (remS) => {
        if(remS === "") return true;
        if(remS in dp) return  dp[remS];
        let res = false;
        for(let i=0; i<remS.length; i++){
            let subStr = remS.substring(0, i+1);
            if(wordDict.includes(subStr) && fn(remS.substring(i+1))){
                res = true;
            }
        }
        return dp[remS] = res;
    }
    return fn(s);
}
console.log(wordBreak(s = "leetcode", wordDict = ["leet","code"]));
console.log(wordBreak(s = "applepenapple", wordDict = ["apple","pen"]));
console.log(wordBreak(s = "catsandog", wordDict = ["cats","dog","sand","and","cat"]));
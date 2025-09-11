function longestSubstring(s){
    let i = j = 0;
    let map = {};
    let max = 0;

    for(let j=0; j<s.length; j++){
        if(map[s[j]] !== undefined && map[s[j]] >= i){
            i = map[s[j]] + 1;
        }

        map[s[j]] = j;
        let currWindow = j - i + 1;
        max = Math.max(max, currWindow);
    }
    return max;
}
// let s = "abcabcbb";
// let s = "bbbbb";
// let s = "pwwkew";
let s = "abcdeafbdgcbb";
console.log(longestSubstring(s));
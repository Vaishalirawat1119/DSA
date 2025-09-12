function characterReplacement(s, k){
    let i = j = 0;
    // let map = {}; //map
    let map = Array(26).fill(0);
    // map[s[0]] = 1;
    map[s.charCodeAt(0)-65] = 1;
    let maxWindow = 0;

    while(j < s.length){
        if(isWindowValid(map, k)){
            maxWindow = Math.max(maxWindow, j-i+1);
            ++j;
            // map[s[j]] = !map[s[j]] ? 1 : ++map[s[j]];
            ++map[s.charCodeAt(j)-65];
        }
        else{
            // --map[s[i]];
            --map[s.charCodeAt(i)-65];
            ++i;
        }
    }
    return maxWindow;
}

function isWindowValid(map, k){
    let total = 0;
    let max = 0;
    for(let i=0; i<26; i++){
        // let char = String.fromCharCode(i + 65);
        // if(map[char]){
            total = total + map[i];
            max = Math.max(max, map[i]);
        // }
    }
    return (total - max <= k);
}
// let s = "ABAB";
let s = "AABABBA";
// let s = "AABEAFAABEAFA"
console.log(characterReplacement(s, 1));
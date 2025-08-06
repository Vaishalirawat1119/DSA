function commonPrefix(s){
    let x = 0;
    while(x < s[0].length){
        let ch = s[0][x];
        for(let i=1; i<s.length; i++){
            if(ch !== s[i][x] || x === s[i].length){
                return s[0].substring(0, x);
            }
        }
        x++;
    }
    return s[0];
}
let s = ["flower", "flow", "flop"];
// let s = ["flower", "flow", "flight"]
// let s = ["racecar", "car", "dog"]
console.log(commonPrefix(s));
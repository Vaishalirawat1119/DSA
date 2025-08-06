function largestOddInString(s){
    let n = s.length-1;
    while(n >= 0){
        if(Number(s[n]) % 2 === 1){
            return s.substring(0, n+1);
        }
        --n;
    }
    return "";
}
let s = "52";
// let s = "4206";
// let s = "35427";
console.log(largestOddInString(s));
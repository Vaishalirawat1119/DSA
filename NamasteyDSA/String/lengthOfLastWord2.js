//Approach 2
function lastWord(s){
    let n = s.length-1;
    let count = 0;

    while(n >= 0){
        if(s[n] !== ' '){
            ++count;
        }
        else if(count > 0) break;
        --n;
    }
    return count;
}
// let s = "  fly me to    the   moon          ";
let s = "    this is   String          ";
console.log(lastWord(s));
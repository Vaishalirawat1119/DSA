function lastWord(s){
    let n = s.length-1;
    while(n >= 0){
        if(s[n] !== ' ') break;
        --n;
    }
    
    let count = 0;
    while(n >= 0){
        if(s[n] === ' ') break;
        --n;
        ++count;
    }
    return count;
}
// let s = "   Hello   World   ";
let s = "  fly me to    the   moon          ";
console.log(lastWord(s));
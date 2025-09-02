function subsequence(s, t){
    let i = j = 0;
    while(j < t.length){
        if(s[i] === t[j]){
            ++i;
        }
        ++j;
    }
    return i === s.length;
}

// let s = "abc";
let s = "bac";
console.log(subsequence(s, "ahbdgc"));
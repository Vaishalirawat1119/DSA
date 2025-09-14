function permutationString(s, t){
    let hashS = Array(26).fill(0);
    let hashW = Array(26).fill(0);
    let windowLen = t.length;

    for(let i=0; i<windowLen; i++){
        ++hashS[t.charCodeAt(i) - 97];
        ++hashW[s.charCodeAt(i) - 97];
    }

    let i=0;
    let j=windowLen-1;

    while(j < s.length){
        if(isHashSame(hashS, hashW)){
            return true;
        }
        else{
            --hashW[s.charCodeAt(i) - 97];
            ++i;
            ++j;
            ++hashW[s.charCodeAt(j) - 97];
        }
    }
    return false;
}

function isHashSame(hashS, hashW){
    for(let i=0; i<26; i++){
        if(hashS[i] !== hashW[i]){
            return false;
        }
    }
    return true;
}

// let s = 'abcdefghijk';
let s = "eidbaooo";
console.log(permutationString(s, 'io'));
// console.log(permutationString(s, 'fgdec'));
// console.log(permutationString(s, 'gef'));

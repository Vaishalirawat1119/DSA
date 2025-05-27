function lengthOfLast(s){
    let length = 0;
    let i = s.length-1;

    while(i >= 0 && s[i] === ' '){
        i--;
    }

    while(i >= 0 && s[i] !== ' '){
        length++;
        i--;
    }
    return length;
}

console.log(lengthOfLast("Hello World"));
console.log(lengthOfLast("    fly   me to the       moon          "));
function reverse(s, k){
    s = s.split("");
    for(let i=0; i<s.length; i=i+(2*k)){
        let n = k;
        let mid = Math.floor(n/2);

        for(let j=0; j<mid; j++){
            let temp = s[i+j];
            s[i+j] = s[i+n-1-j];
            s[i+n-1-j] = temp;
        }
    }
    return s.join("");
}
let s = "abcdefg";
console.log(reverse(s, 2));
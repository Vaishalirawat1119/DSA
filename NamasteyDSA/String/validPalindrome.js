// --- solution using built-in methods ---
function palindrome(s){
    s = s.toLowerCase();
    let filter = "";
    //another way to do reverse
    let rev = "";
    for(let i=0; i<s.length; i++){
        //rejex exp alternate
        // if(s[i].charCodeAt() >= "a".charCodeAt() && s[i].charCodeAt() <= "z".charCodeAt() || s[i].charCodeAt() >= "0".charCodeAt() && s[i].charCodeAt() <= "9".charCodeAt()){
        //     filter += s[i];
        //     rev = s[i] + rev;
        // }
        
        if(s[i].match(/[a-z0-9]/i)){
            filter += s[i];
            rev = s[i] + rev;
        }
    }
    // let rev = filter.split("").reverse().join("");
    return filter === rev;
}
// let s = "A man, a plan, a canal: Panama";
let s = "race a car"
console.log(palindrome(s));
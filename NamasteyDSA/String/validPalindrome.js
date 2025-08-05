// --- solution using built-in methods ---
function palindrome(s){
    s = s.toLowerCase();
    let filter = "";
    //another way to do reverse
    let rev = "";
    for(let i=0; i<s.length; i++){
        if(s[i].match(/[a-z0-9]/i)){
            filter += s[i];
            rev = s[i] + rev;
        }
    }
    // let rev = filter.split("").reverse().join("");
    return filter === rev;
}
let s = "A man, a plan, a canal: Panama";
console.log(palindrome(s));
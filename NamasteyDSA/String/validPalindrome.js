// --- solution using built-in methods ---
function palindrome(s){
    s = s.toLowerCase();
    let filter = "";
    for(let i=0; i<s.length; i++){
        if(s[i].match(/[a-z0-9]/i)){
            filter += s[i];
        }
    }
    let rev = filter.split("").reverse().join("");
    return filter === rev;
}
let s = "A man, a plan, a canal: Panama";
console.log(palindrome(s));
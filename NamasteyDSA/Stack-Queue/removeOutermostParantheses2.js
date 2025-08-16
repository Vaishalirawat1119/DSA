//Approach 2

function removeOuterParantheses(s){
    let level = -1;
    let ans = "";

    for(let i=0; i<s.length; i++){
        if(s[i] === "("){
            ++level;
            ans += ((level) ? s[i] : "");
        }
        else{
            ans += ((level) ? s[i] : "");
            --level;
        }
    }
    return ans;
}

let s = "(()())(())(()(()))";
console.log(removeOuterParantheses(s));
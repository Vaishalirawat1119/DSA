function removeOuterParantheses(x){
    let stack = [];
    let ans = "";

    for(let i=0; i<x.length; i++){
        if(x[i] === "("){
            stack.push(x[i])
                ans += ((stack.length > 1) ? x[i] : "");
        }
        else{
            ans += ((stack.length > 1) ? x[i] : "");
            stack.pop();
        }
    }
    return ans;
}

// let x = "(()())(())(()(()))"
let x = "(()())(())"
// let x = "()()"
console.log(removeOuterParantheses(x));

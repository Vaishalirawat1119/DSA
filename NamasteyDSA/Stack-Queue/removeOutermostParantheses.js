function removeOuterParantheses(x){
    let stack = [];
    let ans = "";

    for(let i=0; i<x.length; i++){
        if(x[i] === "("){
            stack.push(x[i])
            if(stack.length > 1){
                ans += x[i];
            }
        }
        else{
            if(stack.length > 1){
                ans += x[i];
            }
            stack.pop();
        }
    }
    return ans;
}

let x = "(()())(())(()(()))"
console.log(removeOuterParantheses(x));

function polishNotation(arr){
    let stack = [];
    const map = {
        "+" : (a,b) => b + a,
        "-" : (a,b) => b - a,
        "*" : (a,b) => b * a,
        "/" : (a,b) => Math.trunc(b / a),
    };

    for (let i = 0; i < arr.length; i++) {
        if (map[arr[i]]) {
            let a = stack.pop();
            let b = stack.pop();
            let ans = map[arr[i]](a, b);
            stack.push(ans);
        } else {
            stack.push(Number(arr[i]));
        }
    }

    return stack[0];
}

let arr = ["10","6","9","3","+","-11","*","/","*","17","+","5","+"];
console.log(polishNotation(arr));
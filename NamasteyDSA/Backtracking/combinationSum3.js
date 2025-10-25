function combinationSum3(k, n){
    let result = [];
    let backtrack = (remainingSum, path, start) => {
        if(path.length === k){
            if(remainingSum === 0){
                result.push([...path]);
            }
            return;
        }
        for(let i=start; i<=9; i++){
            path.push(i);
            backtrack(remainingSum - i, path, i+1);
            path.pop();
        }
    }
    backtrack(n, [], 1);
    return result;
}

// console.log(combinationSum3(3, 7));
console.log(combinationSum3(3, 9));
// console.log(combinationSum3(4, 1));
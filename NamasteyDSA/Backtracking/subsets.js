function subsets(arr){
    let result = [];
    let backtrack = (path, start) => {
        result.push([...path]);
        for(let i=start; i<arr.length; i++){
            path.push(arr[i]);
            backtrack(path, i+1);
            path.pop();
        }
    }
    backtrack([], 0);
    return result;
}

let arr = [1,2,3];
console.log(subsets(arr));
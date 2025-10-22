function subset2(arr){
    let result = [];
    arr.sort((a, b) => (b-a));
    let backtrack = (path, start) => {
        result.push([...path]);
        for(let i=start; i<arr.length; i++){
            if(i > start && arr[i-1] === arr[i]) continue;
            path.push(arr[i]);
            backtrack(path, i+1);
            path.pop();
        }
    }
    backtrack([], 0);
    return result;
}

let arr = [1,2,3,2];
console.log(subset2(arr));
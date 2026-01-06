function removeDuplicate(arr){
    let seen = new Set();
    let ans = [];
    for(let value of arr){
        if(!seen.has(value)){
            seen.add(value);
            ans.push(value);
        }
    }
    return ans;
}
console.log(removeDuplicate([1,2,3,3,4,2,1]));
console.log(removeDuplicate([1,'1',1]));
console.log(removeDuplicate([]));
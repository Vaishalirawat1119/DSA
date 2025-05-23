function permuteUniqueValue(n){
    let result = [];
    n.sort((a,b) => a - b);

    let used = new Array(n.length).fill(false);

    function backtrackAgain(temp){
        if(temp.length === n.length){
            result.push([...temp]);
            return;
        }

        for(let i=0; i<n.length; i++){
            if(used[i]) continue;

            if(i > 0 && n[i] === n[i-1] && !used[i-1]) continue;

            used[i] = true;
            temp.push(n[i]);
            backtrackAgain(temp);
            temp.pop();
            used[i] = false;
        }
    }
    backtrackAgain([]);
    return result;
}
console.log(permuteUniqueValue([1,2,3]));
console.log(permuteUniqueValue([1,1,2]));

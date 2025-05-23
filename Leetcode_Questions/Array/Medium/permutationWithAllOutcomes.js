function permuteAllOutcomes(n){
    let result = [];

    function backtrack(s){
        if(s === n.length-1){
            result.push([...n]);
            return;
        }

        for(let i=s; i<n.length; i++){
            [n[s], n[i]] = [n[i], n[s]];
            backtrack(s+1);
            [n[s], n[i]] = [n[i], n[s]];
        }
    }
    backtrack(0);
    return result;
}
console.log(permuteAllOutcomes([1,2,3]));
console.log(permuteAllOutcomes([0,1]));
console.log(permuteAllOutcomes([1]));
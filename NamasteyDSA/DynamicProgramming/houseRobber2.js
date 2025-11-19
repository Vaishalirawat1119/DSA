function rob(val){
    let n = val.length;
    if(n === 1) return val[0];
    function robHelper(start, end){
        let p1 = p2 = 0;
        for(let i=start; i<=end; i++){
            let curr = Math.max(val[i] + p2, p1);
            let temp = p1;
            p1 = curr;
            p2 = temp;
            curr++;
        }
        return p1;
    }
    return Math.max(robHelper(0, n-2), robHelper(1, n-1));
}

console.log(rob([2,3,2]));
console.log(rob([1,2,3,1]));
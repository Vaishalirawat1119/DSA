function ropeCutting(n, a, b, c){
    if(n === 0) return 0;
    if(n < 0) return -1;

    let cutA = ropeCutting(n-a, a, b, c);
    let cutB = ropeCutting(n-b, a, b, c);
    let cutC = ropeCutting(n-c, a, b, c);

    let maximumCut = Math.max(cutA, cutB, cutC);

    if(maximumCut === -1) return -1;
    return maximumCut + 1;
};
console.log(ropeCutting(17, 10, 11, 3));
console.log(ropeCutting(10,9,7,11));
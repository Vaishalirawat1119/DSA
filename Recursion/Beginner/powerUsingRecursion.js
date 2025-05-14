// we have n and p and find n^p

function power(n,p){
    if(p === 0) return 1;
    return n * power(n, p-1);
};
console.log(power(2,9));
console.log(power(9,9));
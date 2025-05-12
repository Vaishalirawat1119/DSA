let n;

function trailingZeros(n){
    if(n < 0){
        return "Trailing zeros of negative number is not possible";
    }

    let count = 0;

    for(let i=5; n/i >= 1; i*=5){
        count += Math.floor(n/i);
    }
    return count;
};
console.log(trailingZeros(5));
console.log(trailingZeros(100));
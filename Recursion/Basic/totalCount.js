function totalCountOfDigits(n){
    if(n === 0) return 0;
    return 1 + totalCountOfDigits(Math.floor(n / 10));
};
console.log(totalCountOfDigits(11));
console.log(totalCountOfDigits(99999));
console.log(totalCountOfDigits(0));
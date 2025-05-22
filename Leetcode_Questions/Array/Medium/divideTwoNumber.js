function divide(dividend, divisor){
    const MAX = 2 ** 31 - 1;
    const MIN = -(2 ** 31);

    if(dividend === MIN && divisor === -1) return MAX;
    const isNegative = (dividend < 0 !== divisor < 0); 

    let a = Math.abs(dividend);
    let b = Math.abs(divisor);
    let result = 0;

    while(a >= b){
        a -= b;
        result++;
    }
    return isNegative ? -result : result;
}
console.log(divide(10,3));
console.log(divide(7,-3));

function plusOne(digits){
    let num = digits.length;
    for(let i = num-1; i >= 0; i--){
        if(digits[i] < 9){
            digits[i]++;
            return digits;
        }
        digits[i] = 0;
    }
    digits.unshift(1);
    return digits;
}
console.log(plusOne([1,2,3]));
console.log(plusOne([4,3,2,1]));
console.log(plusOne([1,0]));
console.log(plusOne([9]));
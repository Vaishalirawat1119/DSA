function reverseInteger(nums){
    let isNegative = nums < 0;
    nums = Math.abs(nums);
    let reversed = 0;

    while(nums > 0){
        let lastDigit = nums % 10;
        reversed = reversed * 10 + lastDigit;
        nums = Math.floor(nums/10);
    }
    if(isNegative) reversed = -reversed;
    if(reversed < -(2 ** 31) || reversed > (2 ** 31 - 1)) return 0;
    return reversed;
}

// let nums = 123
let nums = -12
console.log(reverseInteger(nums));

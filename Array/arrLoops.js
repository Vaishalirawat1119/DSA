// For loop
// Write a program to calculate the sum of all numbers in an array.

let nums = [1,2,3,4,5];
let sum = 0;

for(let i=0; i<nums.length; i++){
    sum += nums[i];
};
// console.log(sum);

// Find the maximum number in an array

let nums2 = [4,7,1,8,0,1,5,9];
let max = nums2[0];

for(let i=1; i<nums2.length; i++){
    if(nums2[i] > max){
        max = nums2[i];
    }
}
// console.log(`Maximum number is: ${max}`);










// While loop
// Same as above but using a while loop

let whileNums = [2,5,8,1,9];
let sum1 = 0;
let i = 0;

while (i < whileNums.length) {
    sum1 += whileNums[i];
    i++;
}
// console.log(sum1);


let whileNums2 = [21,36,11,86,90,34,100];
let max1 = whileNums2[0];
let j = 1;

while (j < whileNums2.length) {
    if(whileNums2[j] > max1){
        max1 = whileNums2[j];
    }
    j++;
}
console.log(`Maximum number is: ${max1}`);


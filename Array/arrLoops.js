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


// Reverse an array
let nums3 = [1,2,3,4,5];
let reverse = [];

for(let i=nums3.length-1; i>=0; i--){
    reverse.push(nums3[i]);
}
// console.log(`Reversed array is: ${reverse}`);


// Count Even and Odd numbers in an array
let nums4 = [1,2,4,7,8,11,56,33,72,23,55,9,5];
let evenCount = 0;
let oddCount = 0;

for(let i=0; i<nums4.length; i++){
    if(nums4[i] % 2 === 0){
        evenCount++;
    }
    else{
        oddCount++;
    }
}
// console.log(`Even numbers: ${evenCount}, Odd numbers: ${oddCount}`);




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
// console.log(`Maximum number is: ${max1}`);

let whileNums3 = [6,7,8,9,10,11];
let reverse1 = [];
let k = whileNums3.length - 1;

while (k >= 0) {
    reverse1.push(whileNums3[k]);
    k--;
}
// console.log(`Reversed array is: ${reverse1}`);


let whileNums4 = [1,2,3,4,34,77,5,6,12,92,11,7,19,8,9,10];
let evenCount1 = 0;
let oddCount1 = 0;
let a = 0;

while (a<whileNums4.length) {
    if(whileNums4[a] % 2 === 0){
        evenCount1++;
    }
    else{
        oddCount1++;
    }
    a++;
}

console.log(`Even numbers: ${evenCount1}, Odd numbers: ${oddCount1}`);


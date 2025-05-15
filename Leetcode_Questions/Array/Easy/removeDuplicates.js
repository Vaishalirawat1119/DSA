function removeDeuplicates(nums){
    let duplicate = 0;
    for(let i=0; i<nums.length; i++){
        if(nums[i] !== nums[duplicate]){
            duplicate++;
            nums[duplicate] = nums[i];
        }
    }
    return duplicate + 1;
}
let nums = [1,2,2,3,3,5,5,7,7,7];
let findDuplicates = removeDeuplicates(nums);
console.log(findDuplicates);

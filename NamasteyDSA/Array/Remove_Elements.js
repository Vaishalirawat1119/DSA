function removeElementFromArray(nums, val){
    let x = 0;
    for(let i = 0; i < nums.length; i++){
        if(nums[i] !== val){
            nums[x] = nums[i];
            x++;
        }
    }
    return x;
}
let nums = [3,2,2,3]
console.log(nums.slice(0, removeElementFromArray(nums,3)));
function removeElement(nums, val){
    let k = 0;

    for(let i=0; i<nums.length; i++){
        if(nums[i] !== val){
            nums[k] = nums[i];
            k++;
        }
    }
    return k;
}

let nums = [2,3,3,2];
let val = 2;
let k = removeElement(nums, val);
console.log(k);
console.log(nums.slice(0, k));

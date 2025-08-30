function twoSum2(arr, target){
    let i = 0;
    let j = arr.length-1;
    while(i < j){
        let sum = arr[i] + arr[j];
        if(sum > target){
            --j;
        }
        else if(sum < target){
            ++i;
        }
        else{
            return [i+1, j+1];
        }
    }
}
// let arr = [2, 7, 11, 15];
let arr = [2,3,4];
// let arr = [3,3];
console.log(twoSum2(arr, 6));
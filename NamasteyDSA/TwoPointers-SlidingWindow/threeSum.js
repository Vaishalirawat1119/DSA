function threeSum(arr){
    arr.sort((a,b) => a-b);
    let ans = [];
    for(let i=0; i<arr.length; i++){
        if(arr[i] !== arr[i-1]){
            twoSum(arr, i,ans);
        }
    }
    return ans;
}

function twoSum(arr, x, ans){
    let i = x+1;
    let j = arr.length-1;

    while(i < j){
        let sum = arr[i] + arr[j] + arr[x];
        if(sum > 0){
            --j;
        }
        else if(sum < 0){
            ++i;
        }
        else{
            ans.push([arr[i], arr[j], arr[x]]);
            ++i; --j;
            while(i < j && arr[i] === arr[i-1]) ++i;
        }
    }
}

let arr = [-1,0,1,2,-1,-4];
// let arr = [0,1,1];
// let arr = [0,0,0];
console.log(threeSum(arr));
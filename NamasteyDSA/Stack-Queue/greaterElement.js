function greaterElement(nums){
    let arr = [...nums, ...nums];
    let n = arr.length;
    let stack = [];
    let ans = Array(n).fill(-1);

    stack.push(arr[n-1]);

    for(let i = n-2; i >= 0; i--){
        while(stack.length){
            let top = stack[stack.length-1];
            if(arr[i] < top){
                ans[i] = top;
                break;
            }
            else{
                stack.pop();
            }
        }
        stack.push(arr[i]);
    }
    return ans.slice(0, n/2);
}
// let nums = [1,2,1];
let nums = [1,5,0,3,4,9,2,6,8];
console.log(greaterElement(nums));
function nextGreatEle(a1, arr){
    let map = {};
    let stack = [];
    let n = arr.length;

    stack.push(arr[n-1]);
    map[arr[n-1]] = -1;

    for(let i=n-2; i>=0; i--){
        while(stack.length){
            if(stack[stack.length-1] < arr[i]){
                stack.pop()
            }
            else{
                map[arr[i]] = stack[stack.length-1];
                break;
            }

            if(!stack.length){
                map[arr[i]] = -1;
            }
        }
        stack.push(arr[i]);
    }
    return a1.map(x => map[x]);
}

// let a1 = [4,1,2];
// let arr = [1,3,4,2];
let a1 = [2,4];
let arr = [1,2,3,4];
console.log(nextGreatEle(a1,arr));
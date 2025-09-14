function windowMax(arr, k){
    let res = [];
    let q = [];
    let i = j = 0;
    while(j < arr.length){

        //push current element, after removing all smaller elements from last/back
        while(q.length && arr[j] > q[q.length-1]) { q.pop(); }

        q.push(arr[j]);

        //when window size is k 
        if(j >= k-1){
            res.push(q[0]);

            //if the largest element for current window is larger, then remove it
            arr[i] === q[0] && q.shift();
            ++i;
        }
        ++j;
    }
    return res;
}

let arr = [1,3,-1,-3,5,3,6,7];
// let arr = [1];
console.log(windowMax(arr, 3));
// console.log(windowMax(arr, 1));
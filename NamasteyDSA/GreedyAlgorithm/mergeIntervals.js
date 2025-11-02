function merge(arr){
    arr.sort((a,b) => (a[0]-b[0]));
    let ans = [arr[0]];
    for(let i=1; i<arr.length; i++){
        if(arr[i][0] <= ans[ans.length-1][1]){
            ans[ans.length-1][1] = Math.max(ans[ans.length-1][1], arr[i][1]);
        }
        else{
            ans.push(arr[i]);
        }
    }
    return ans;
}

// console.log(merge([[1,3],[2,6],[8,10],[15,18]]));
// console.log(merge([[1,4],[4,5]]));
console.log(merge([[4,7],[1,4]]));
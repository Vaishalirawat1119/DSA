function maxProduct(arr){
    let n = arr.length;
    let leftToRight = rightToLeft = 1;
    let totalMax = -Infinity;
    for(let i=0; i<n; i++){
        leftToRight = leftToRight * arr[i];
        rightToLeft = rightToLeft * arr[n-i-1];
        totalMax = Math.max(totalMax, leftToRight, rightToLeft);
        if(leftToRight === 0) leftToRight = 1;
        if(rightToLeft === 0) rightToLeft = 1;
    }
    return totalMax;
}

console.log(maxProduct([2,3,-2,4]));
console.log(maxProduct([-2,0,-1]));
console.log(maxProduct([2,-5,3,1,-4,0,-10,2,8]));
console.log(maxProduct([2,-5,3,1,-4,0,-10,2,-8]));
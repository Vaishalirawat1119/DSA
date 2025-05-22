function searching(element, target){
    let left = 0;
    let right = element.length-1;

    while(left <= right){
        let mid = Math.floor((left + right) / 2);

        if(element[mid] === target) return mid;
        if(element[mid] < target)  left = mid + 1;
        right = mid - 1;
    }
    return left;
}
console.log(searching([1,3,5,7], 5));
console.log(searching([1,3,5,6], 2));

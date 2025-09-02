function firstOccurrrence(haystack, needle){
    let n = haystack.length;
    let m = needle.length;

    for(let i=0; i<=n-m; i++){
        let j = 0;
        for(j=0; j<m; j++){
            if(haystack[i+j] !== needle[j]){
                break;
            }
        }
        if(j === m) {
            return i;
        }
    }
    return -1;
}

// let haystack = "sadbutsad";
let haystack = "saturdaysad"
console.log(firstOccurrrence(haystack, "sad"));
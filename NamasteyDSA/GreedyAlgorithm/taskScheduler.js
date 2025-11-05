function taskScheduler(arr, n){
    let freq = Array(26).fill(0);
    let maxFreq = 0;
    for(let i=0; i<arr.length; i++){
        let curr = arr[i].charCodeAt()-65;
        ++freq[curr];
        maxFreq = Math.max(maxFreq, freq[curr]);
    }
    let countOfMaxFreqElements = 0;
    for(let i=0; i<26; i++){
        if(freq[i] === maxFreq){
            ++countOfMaxFreqElements;
        }
    }
    let cycles = ((n+1) * (maxFreq-1)) + countOfMaxFreqElements;
    return Math.max(arr.length, cycles);
}

console.log(taskScheduler(["A","A","A","B","B","B"], 2));
console.log(taskScheduler(["A","C","A","B","D","B"], 1));
console.log(taskScheduler(["A","A","A","B","B","B"], 3));



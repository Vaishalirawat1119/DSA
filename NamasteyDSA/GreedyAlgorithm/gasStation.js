function canCompleteCircuit(gas, cost){
    let currGain = 0;
    let totalGain = 0;
    let ans = 0;
    for(let i=0; i<gas.length; i++){
        let gain = gas[i] - cost[i];
        currGain = currGain + gain;
        totalGain = totalGain + gain;
        if(currGain < 0){
            ans = i+1;
            currGain = 0;
        }
    }   
    return totalGain < 0 ? -1 : ans;
}

console.log(canCompleteCircuit([1,2,3,4,5], [3,4,5,1,2]));
console.log(canCompleteCircuit([2,3,4], [3,4,3]));


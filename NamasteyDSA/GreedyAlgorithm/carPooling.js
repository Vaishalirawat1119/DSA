function carPooling(trips, carCapacity){
    let location = Array(1001).fill(0);
    for(let i=0; i<trips.length; i++){
        let [passengers, from, to] = trips[i];
        location[from] = location[from] + passengers;
        location[to] = location[to] - passengers;
    }
    let usedCapacity = 0;
    for(let i=0; i<1001; i++){
        usedCapacity = usedCapacity + location[i];
        if(usedCapacity > carCapacity) return false;
    }
    return true;
}

console.log(carPooling([[2,1,5],[3,3,7]], 4));
console.log(carPooling([[2,1,5],[3,3,7]], 5));

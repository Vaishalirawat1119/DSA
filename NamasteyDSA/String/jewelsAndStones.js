function jewelsStones(jewels, stones){
    let set = new Set();
    let count = 0;

    for(let i=0; i<jewels.length; i++){
        set.add(jewels[i])
    }

    for(let j=0; j<stones.length; j++){
        if(set.has(stones[j])) count++;
    }


    // for(let i=0; i<stones.length; i++){
    //     for(let j=0; j<jewels.length; j++){
    //         if(stones[i] == jewels[j]){
    //             count++;
    //             break;
    //         }
    //     }
    // }
    return count;
}
console.log(jewelsStones("aA", "aAAbbb"));
// console.log(jewelsStones("A", "aAAbbb"));
// console.log(jewelsStones("a", "aAAbbb"));
console.log(jewelsStones("z", "ZZ"));
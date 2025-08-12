function groupAnagrams(s) {
    let map = {};
    for(let i=0; i<s.length; i++){
        let sortedVal = s[i].split("").sort().join("");
        if(!map[sortedVal]){
            map[sortedVal] = [s[i]];
        }
        else{
            map[sortedVal].push(s[i]);
        }
    }
    return[...Object.values(map)];
};

let s = ["eat","tea","tan","ate","nat","bat"]
console.log(groupAnagrams(s));
//First Occurence in a string

function firstOccurence(str, find){
    return str.indexOf(find);
}
let str = "leetcode";
// let find = "leeto";  -> -1
// let find = "code";   ->  4 
let find = "leet";
console.log(firstOccurence(str, find));
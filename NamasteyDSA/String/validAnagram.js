// approach 1:
function anagram(s,v){
    return s.split("").sort().join("") === v.split("").sort().join("");
}
// let s = "anagram";
// let v = "nagaram";
let s = "rat";
let v = "car";
console.log(anagram(s, v));
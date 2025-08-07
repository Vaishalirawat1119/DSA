// approach 1:
// function anagram(s,v){
//     return s.split("").sort().join("") === v.split("").sort().join("");
// }

//approach 2:
function anagram(s, v){
    if(s.length !== v.length) return false;

    let map = {};
    for(let i=0; i<s.length; i++){
        if(!map[s[i]]){
            map[s[i]] = 1;
        }
        else{
            map[s[i]]++;
        }
    }

    for(let j=0; j<v.length; j++){
        if(!map[v[j]] || map[v[j]] < 0){
            return false;
        }
        map[v[j]]--;
    }
    return true;
}
// let s = "anagram";
// let v = "nagaram";

let s = "apple";
let v = "map";

// let s = "rat";
// let v = "car";

console.log(anagram(s, v));
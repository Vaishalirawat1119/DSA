function vowelsAndConsonant(s){
    if(!s) return -1;
    let map = {};
    for(let i=0; i<s.length; i++){
        map[s[i]] = !map[s[i]] ? 1 : ++map[s[i]];
    }

    let vowels = ['a','e','i','o','u'];
    let maxVowel = 0;
    let maxConsonant = 0;
    let mapKeys = Object.keys(map)

    for(let i=0; i<mapKeys.length; i++){
        if(vowels.includes(mapKeys[i])){
            maxVowel = Math.max(maxVowel, map[mapKeys[i]]);
        }
        else{
            maxConsonant = Math.max(maxConsonant, map[mapKeys[i]])
        }
    }
    return maxConsonant + maxVowel;

}
let s = "successes";
// let s = 'vaishali';
// let s = '';
// let s = 'a';
console.log(vowelsAndConsonant(s));
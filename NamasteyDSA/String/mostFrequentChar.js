function vowelsAndConsonant(s){
    if(!s) return -1;
    let map = {};
    for(let i=0; i<s.length; i++){
        if(!map[s[i]]){
            map[s[i]] = 1;
        }
        else{
            map[s[i]]++;
        }
    }

    let vowels = ['a','e','i','o','u'];
    let maxVowel = 0;
    let maxConsonant = 0;

    for(let i=0; i<s.length; i++){
        if(vowels.includes(s[i])){
            if(map[s[i]] > maxVowel){
                maxVowel = map[s[i]];
            } 
        }
        else{
            if(map[s[i]] > maxConsonant){
                maxConsonant = map[s[i]]
            }
        }
    }
    return maxConsonant + maxVowel;

}
let s = "successes";
// let s = 'vaishali';
// let s = '';
// let s = 'a';
console.log(vowelsAndConsonant(s));
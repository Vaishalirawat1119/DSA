function findWords(words, x){
    let result = [];
    for(let i=0; i<words.length; i++){
        if(words[i].includes(x)){
            result.push(i);
        }
    }
    return result;
}
let words = ["abc", "baa", "def", "vss"];
console.log(findWords(words, "s"));
// console.log(findWords(words, "a"));
function findWords(words, x){
    let result = [];
    for(let i=0; i<words.length; i++){
        for(let j=0; j<words[i].length; j++){
            if(words[i][j] === x){
                result.push(i);
                break
            }
        }

        //Built-in methods.....
        // if(words[i].includes(x)){
        //     result.push(i);
        // }
    }
    return result;
}
let words = ["abc", "baa", "def", "vss"];
console.log(findWords(words, "s"));
// console.log(findWords(words, "a"));
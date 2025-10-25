function letterCombinations(digits){
    if(!digits.length) return [];
    let letters = {
        2 : "abc",
        3 : "def",
        4 : "ghi",
        5 : "jkl",
        6 : "mno",
        7 : "pqrs",
        8 : "tuv",
        9 : "wxyz"    
    };
    let result = [];
    let backtrack = (path, index) => {
        if(index === digits.length){
            result.push(path.join(""));
            return;
        }
        let choices = letters[digits[index]];
        for(let i=0; i<choices.length; i++){
            path.push(choices[i]);
            backtrack(path, index + 1);
            path.pop();
        }
    }
    backtrack([], 0);
    return result;
}

// console.log(letterCombinations("23"));
console.log(letterCombinations("79"));
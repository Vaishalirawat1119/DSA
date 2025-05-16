// Letter Combination of a Phone Number

function letterCombination(digits){
    const map = {
        2: "abc",
        3: "def",
        4: "ghi",
        5: "jkl",
        6: "mno",
        7: "pqrs",
        8: "tuv",
        9: "wxyz"
    };
    const result = [];
    
    const backtrack = (combination, nextDigits) => {
        if(!nextDigits.length){
            result.push(combination);
        }
        else{
            let letters = map[nextDigits[0]];
            for( let letter of letters){
                backtrack(combination+letter, nextDigits.slice(1));
            };
        };
    };

    if(digits.length === 0) return [];
    backtrack("", digits);
    return result;
};
console.log(letterCombination("23"));
console.log(letterCombination("2"));
console.log(letterCombination(""));
console.log(letterCombination("234"));
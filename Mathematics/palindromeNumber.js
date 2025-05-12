// with methods

let str;
function isPalindrome(str){
    const cleaned = str.toLowerCase().replace(/[^a-z0-9]/g, ''); // Convert to lowercase and remove non-alphanumeric characters
    const reversed = cleaned.split('').reverse().join(''); // Split the string into an array, reverse it, and join it back into a string
    return cleaned === reversed; // Check if the cleaned string is equal to its reversed version
}

// console.log(isPalindrome("racecar"));
// console.log(isPalindrome("hello"));
// console.log(isPalindrome("A man, a plan, a canal, panama"));
// console.log(isPalindrome("123234"));


// without any methods and case handling

let anything;
function isPalindromeOrNot(anything){
    let left = 0; //Initialize left pointer to 0
    let right = anything.length-1; // Initialize right pointer to the last index of the anything (it can be a string or a number)
    while (left < right) {
        if(anything[left] !== anything[right]){
            return false; //If left and right pointers are not equal, return false
        }
        left++; 
        right--;
    }
    return true;
};
console.log(isPalindromeOrNot("moon"));
console.log(isPalindromeOrNot("mom"));
console.log(isPalindromeOrNot("6776"));
console.log(isPalindromeOrNot("1"));
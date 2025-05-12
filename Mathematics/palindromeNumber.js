// with methods

let str;
function isPalindrome(str){
    const cleaned = str.toLowerCase().replace(/[^a-z0-9]/g, ''); // Convert to lowercase and remove non-alphanumeric characters
    const reversed = cleaned.split('').reverse().join(''); // Split the string into an array, reverse it, and join it back into a string
    return cleaned === reversed; // Check if the cleaned string is equal to its reversed version
}

console.log(isPalindrome("racecar"));
console.log(isPalindrome("hello"));
console.log(isPalindrome("A man, a plan, a canal, panama"));
console.log(isPalindrome("123234"));




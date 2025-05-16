function palindrome(a, left = 0, right = a.length-1){
    if(left >= right)return true;
    if(a[left] !== a[right]) return false;
    return palindrome(a, left+1, right-1); 
};
console.log(palindrome("moon"));
console.log(palindrome("12321"));
console.log(palindrome("malayalam"));
console.log(palindrome("11"));
console.log(palindrome("19"));
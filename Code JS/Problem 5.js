// 5. Pengecekan Bila Sebuah String itu palindrome
function isPalindrome(str){
    const reversed = str.split("").reverse().join("");
    return str === reversed;
}

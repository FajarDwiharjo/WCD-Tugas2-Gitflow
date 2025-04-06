// 4. Penghapus Kata yang Pertama Kali Muncul dalam Sebuah String
function removeFirstOccurrence(str, searchStr){
    return str.replace(searchStr, "");
}

console.log(removeFirstOccurrence("Hello world", "ell")); 

// 2. Ubah Centi Ke Kilo (Meter) dan Sebaliknya
function convertLength(value){
    if (value >= 100000) {
        return `${value}-1 km`; 
    } else {
        return `${value * 100000}-1 cm`; 
    }
}

console.log(convertLength(100000)); 
console.log(convertLength(1));      

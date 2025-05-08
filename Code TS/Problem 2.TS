// 2. Ubah Centi Ke Kilo (Meter) dan Sebaliknya
function convertLength(value: number): string {
    if (value >= 100000) {
        return `${value}-1 km`; 
    } else {
        return `${value * 100000}-1 cm`; 
    }
}

// Logic Challenge - Target Terdekat
/*
Problem
Diberikan sebuah function targetTerdekat(arr) yang menerima satu parameter 
berupa array yang terdiri dari karakter. 
Function akan me-return jarak spasi antar karakter 'o'
dengan karakter 'x' yang terdekat. 
Contoh, jika arr adalah ['x', ' ', 'o', ' ', ' ', 'x'], 
maka jarak terdekat dari 'o' ke 'x' adalah 2. 
Jika tidak ditemukan 'x' sama sekali, function akan me-return nilai 0.

Code
*/
function targetTerdekat(arr) {

    var indexO = arr.indexOf('o')
    // console.log(indexO)=2
    var jarak = 0
    var jarakTerdekat =arr.length
    // console.log (jarakTerdekat)=8

    if (arr.indexOf('x') === -1){
        return 0
    }
    // Mengembalikan nilai 0 jika tidak ada array 'x' didalam index

    for (var i = 0; i < arr.length; i++){
        if (arr[i] === 'x'){
            jarak = Math.abs(i-indexO)
            // console.log (jarak+' iterasi ke-'+i)
            // Nilai jarak adalah nilai absolute dari pengurangan antara i dengan nilai index O
            if (jarak < jarakTerdekat){
                jarakTerdekat = jarak
            }
            // jika nilai jarak kurang dari nilai jarak terdekat maka set nilai jarak dengan nilai jarakTerdekat
        }
    }
    return jarakTerdekat
}

  


// TEST CASES
console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2
// Logic Challenge - Pasangan Angka Terbesar
// Problem
// Diberikan sebuah function pasanganTerbesar(angka) yang menerima 1 parameter berupa angka. Functiona akan menentukan pasangan dua digit angka mana yang paling besar dan me-return angka tersebut. Contoh, jika angka adalah 183928, maka function akan me-return 92, pasangan dua digit angka yang paling besar diantara yang lainnya.

function pasanganTerbesar(num) {
  var numString = num.toString()
  var array=[]
  // variable u/ menampung array
  var numPasangan=''
     // variable u/ menampung hasil looping pasangan
  var hasil=''
  for (i=0; i < numString.length-1;i++){
      numPasangan = numString[i]+numString[i+1]
    array.push(numPasangan)
    hasil=array.sort(function(value1, value2) { return parseInt(value1) < parseInt(value2) })
  }
  return hasil[0]
  // Mengembalikan hasil yg terbesar setelah disort
}

// TEST CASES
console.log(pasanganTerbesar(641573)); // 73
console.log(pasanganTerbesar(12783456)); // 83
console.log(pasanganTerbesar(910233)); // 91
console.log(pasanganTerbesar(71856421)); // 85
console.log(pasanganTerbesar(79918293)); // 99

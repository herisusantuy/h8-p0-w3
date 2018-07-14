// Logic Challenge - Mengelompokkan Hewan
/*Problem
Diberikan sebuah function groupAnimals(arr) yang menerima satu parameter 
berupa array yang berisi string. Function akan me-return array multidimensi 
dimana array tersebut berisikan kategori/kelompok array yang dikumpulkan 
sesuai dengan abjad depannya. Abjad harus berurut dari a-z (jika ada). 
Untuk kasus ini, anggap saja semua text lowercase.
Contoh jika animals adalah ["ayam", "kucing", "bebek", "bangau", "zebra"]
maka akan menampilkan output: [ [ "ayam" ], [ "bebek", "bangau" ], [ "kucing ], [ "zebra" ] ]
Urutan hewan dalam array setiap pengelompokan huruf tidak penting.

Code
*/
function groupAnimals(animals) {
    animals.sort()
    // Mengurutkan array secara ascending a-z
    var kandangBesar = []
    // variable u/ menampung array yang lebih kecil
    var alphabetPertama = animals[0][0]
    // console.log (alphabetPertama)
    var kandangKecil = []
    
    for (i=0; i < animals.length; i++){
        if (animals[i][0] === alphabetPertama){
            kandangKecil.push(animals[i])
        /*jika nilai index 0 dari array i sama dengan nilai dari alphabetPertama maka array tersebut dimasukan 
        ke penampungan kecil yaitu variable kandang kecil   
        */ 
        } else {
            kandangBesar.push(kandangKecil)
            kandangKecil = []
            alphabetPertama = animals[i][0]
            kandangKecil.push(animals[i])
            
        }
        if (i ===  animals.length-1) {
            kandangBesar.push(kandangKecil)
        }
        // console.log (kandangKecil)
    }
    return kandangBesar
}

// TEST CASES
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
[ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
// [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda'], ['unta'] ]
// Melakukan Looping Data Array
var input = [
                ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"],
                ["0002", "Dika Sembiring", "Medan", "10/10/1992", "Bermain Gitar"],
                ["0003", "Winona", "Ambon", "25/12/1965", "Memasak"],
                ["0004", "Bintang Senjaya", "Martapura", "6/4/1970", "Berkebun"]
            ]

// console.log (input.length)
// console.log (input [1][1])


function dataHandling (){
for (var i=0 ; i < input.length ;i++){
  var id ;
  var fullname ;
  var ttl ;
  var hobby ;

  id = input[i][0] ;
  fullname = input[i][1] ;
  ttl = input[i][2]+', '+input [i][3] ;
  hobby = input[i][4] ;

  console.log('Nomor ID : ' + id);
  console.log('Nama Lengkap : ' + fullname);
  console.log('TTL : ' + ttl);
  console.log('Hobi : ' + hobby);
  console.log ('')
  }
}
dataHandling()

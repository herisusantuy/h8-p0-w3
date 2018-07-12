// Menggunakan Built-in Function pada Array
function dataHandling2(array){
  array.splice (1,4,'Roman Alamsyah Elsharawy');
  array.splice (2,0,'Propinsi Bandar Lampung');
  array.splice (3,0,'21/05/1989');
  array.splice (4,0,'Pria');
  array.splice (5,0,'SMS Internasional Metro');
  console.log (array)
  console.log (' ')
  var tanggal='';
  tanggal = array[3].split('/')

  var bulan=tanggal[1]
  switch (bulan){
    case '01' : console.log('Januari'); break;
    case '02' : console.log('Februari'); break;
    case '03' : console.log('Maret'); break;
    case '04' : console.log('April'); break;
    case '05' : console.log('Mei'); break;
    case '06' : console.log('Juni'); break;
    case '07' : console.log('Juli'); break;
    case '08' : console.log('Agustus'); break;
    case '09' : console.log('September'); break;
    case '10' : console.log('Oktober'); break;
    case '11' : console.log('November'); break;
    case '12' : console.log('Desember'); break;
    default :'Bulan tidak terdaftar'
  }
  console.log (' ')
  // var date=[ '21', '1989', '05' ]
  var dateSort=tanggal.sort(function(value1, value2) { return parseInt(value1) < parseInt(value2) })
  // tanggalbaru.sort(function(value1, value2) { return value1 < value2 })
  console.log (dateSort )
  console.log (' ')
  console.log (array[3].split('/').join('-'))
  console.log (' ')
  console.log (array[1].slice(0,15))

}

var input = ["0001", "Roman Alamsyah ", "Bandar Lampung", "21/05/1989", "Membaca"]
dataHandling2 (input)

//
// var kalimat = "saya adalah full-stack javascript programmer!";
// var kata = kalimat.split("-"); // kalimat dipecah dengan separator berupa spasi.
// console.log(kata); // ["saya", "adalah", "full-stack", "javascript", "programmer!"]

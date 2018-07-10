// Mengakses Nilai Dalam Array
function balikString(str){
  var strbaru = ''
  for (i=str.length-1;i >= 0; i--){
    strbaru += str[i]
  }
  return strbaru

}
console.log (balikString('Apa kabar?'))

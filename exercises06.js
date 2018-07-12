// Logic Challenge - Number Palindrome
function angkaPalindrome (angka){
  var isPalindrome=true
  var angkaBaru=angka

    while (isPalindrome){
       angkaBaru=angkaBaru+1
       var stringAngka=angkaBaru.toString()
       var balikkata=''
      for (i=stringAngka.length-1;i>=0;i--){
          balikkata += stringAngka[i]
        }
    // cek apakah palindrome atau bukan    
     if (balikkata===stringAngka){
       return stringAngka
     }
}
}

// TEST CASES
console.log(angkaPalindrome(8)); // 9
console.log(angkaPalindrome(10)); // 11
console.log(angkaPalindrome(117)); // 121
console.log(angkaPalindrome(175)); // 181
console.log(angkaPalindrome(1000)); // 1001
//

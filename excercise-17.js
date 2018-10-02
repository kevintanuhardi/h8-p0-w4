function totalDigitRekursif(angka) {
    if(String(angka).length == 1){
      return angka
    }else{
      return Number(String(angka)[0]) + totalDigitRekursif(Number(angka.toString().substring(1)))
    }
  }
  
  // TEST CASES
  console.log(totalDigitRekursif(512)); // 8
  console.log(totalDigitRekursif(1542)); // 12
  console.log(totalDigitRekursif(5)); // 5
  console.log(totalDigitRekursif(21)); // 3
  console.log(totalDigitRekursif(11111)); // 5
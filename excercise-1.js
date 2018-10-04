function angkaPrima(angka) {
    var check = true;
    
  if(angka < 2){
    check = false;
  }

    for(i = 1 ; i<angka ; i++){
      for(j = 1 ; j<angka; j++){
        if(angka === (i*j)){
          check = false
      }
    }
  }
    return Boolean(check)
}
  
  // TEST CASES
  console.log(angkaPrima(3)); // true
  console.log(angkaPrima(7)); // true
  console.log(angkaPrima(6)); // false
  console.log(angkaPrima(23)); // true
  console.log(angkaPrima(33)); // false
  console.log(angkaPrima(1));
function fpb(angka1, angka2) {
    var divisor1 = [];
    var divisor2 = [];
    var fpb = 0;
  
  //cari divisor 1
    for(i=0; i<=angka1; i++){
      for(j=0; j<=angka1; j++){
        if( (i*j) == angka1){
          divisor1.push(i);
        }
      }
    }
    
  //cari divisor 2
    for(i=0; i<=angka2; i++){
      for(j=0; j<=angka2; j++){
        if( (i*j) == angka2){
          divisor2.push(i);
        }
      }
    }
  //cari fpb
  
    for(i=0; i<divisor1.length; i++){
      for(j=0; j<divisor2.length; j++){
        if( (divisor1[i] == divisor2[j]) && (divisor1[i] > fpb) ){
          fpb = divisor1[i]
        }
      }
    }
    return fpb
  }
  
  // TEST CASES
  console.log(fpb(12, 16)); // 4
  console.log(fpb(50, 40)); // 10
  console.log(fpb(22, 99)); // 11
  console.log(fpb(24, 36)); // 12
  console.log(fpb(17, 23)); // 1
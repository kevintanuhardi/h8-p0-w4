function digitPerkalianMinimum(angka) {
    var arrDigit = [];
    var digitLength =[];
    
      for(i=1; i <= angka; i++){
        Digit = ""
        for(j=1; j<= angka; j++){
          if(i*j ==angka){
            Digit = Digit + i + j;
          }
    
        }
        if(Digit.length !==0){
          arrDigit.push(Digit)
          }
      }
      
      for(i=0; i<arrDigit.length; i++){
        digitLength.push(arrDigit[i].length);
      }
     var min = Math.min.apply(null,digitLength);
     return min
    }
    
    // TEST CASES
    console.log(digitPerkalianMinimum(24)); // 2
    console.log(digitPerkalianMinimum(90)); // 3
    console.log(digitPerkalianMinimum(20)); // 2
    console.log(digitPerkalianMinimum(179)); // 4
    console.log(digitPerkalianMinimum(1)); // 2
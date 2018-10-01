function tukarBesarKecil(kalimat) {
    splitted = kalimat.split("");
    newKalimat = "";
  
    for(i = 0; i<splitted.length; i++){
      if(splitted[i] === splitted[i].toUpperCase() ){
        newKalimat += splitted[i].toLowerCase();
      }else if(splitted[i] === splitted[i].toLowerCase() ){
        newKalimat += splitted[i].toUpperCase();
      }else{
        newKalimat += splitted[i];
      }
  
    }
  
    return newKalimat
  
  }
  
  // TEST CASES
  console.log(tukarBesarKecil('Hello World')); // "hELLO wORLD"
  console.log(tukarBesarKecil('I aM aLAY')); // "i Am Alay"
  console.log(tukarBesarKecil('My Name is Bond!!')); // "mY nAME IS bOND!!"
  console.log(tukarBesarKecil('IT sHOULD bE me')); // "it Should Be ME"
  console.log(tukarBesarKecil('001-A-3-5TrdYW')); // "001-a-3-5tRDyw"
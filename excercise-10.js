function checkAB(num) {
    var splitted = num.split("");
    var arrA = [];
    var arrB = [];
  
    for(i=0; i <splitted.length; i++){
      if(splitted[i]=="a"){
        arrA.push(i);
      }
    }
  
    for(i=0; i <splitted.length; i++){
      if(splitted[i]=="b"){
        arrB.push(i);
      }
    }
  
  var check = false;
  for(j=0; j<arrA.length; j++){
    check = false;
    for(k=0; k<arrB.length; k++ ){
      if(Math.abs(arrA[j]-arrB[k]) ==4 ){
        check = true;
      } 
    }
  
    
  }
  return check
  //  console.log(arrA);
  //  console.log(arrB);
  }
  
  // TEST CASES
  console.log(checkAB('lane borrowed')); // true
  console.log(checkAB('i am sick')); // false
  console.log(checkAB('you are boring')); // true
  console.log(checkAB('barbarian')); // true
  console.log(checkAB('bacon and meat')); // false
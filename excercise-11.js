function changeMe(arr) {
  

    for(i=0; i< arr.length; i++){
      myObj = {}
      for(j=0; j<arr[i].length + 1; j++){
        if(j===0){
          console.log(i+1 + ". " , arr[i][j], arr[i][j+1]);
          myObj.firstName = arr[i][j];
        }
        if(j===1){
          myObj.lastName = arr[i][j];
        }
        if(j===2){
          myObj.gender = arr[i][j];
        }
        if(j===3){
          if(arr[i][j] == undefined || arr[i][j]== ""){
            myObj.age = "invalid age year";
          }else{
            myObj.age = 2018 - arr[i][j];
          }
        }
  
      }
      console.log(myObj);
    }
  
  }
  
  // TEST CASES
  changeMe([['Christ', 'Evans', 'Male', 1982], ['Robert', 'Downey', 'Male']]); // 1. Christ Evans:
  // { firstName: 'Christ',
  //   lastName: 'Evans',
  //   gender: 'Male',
  //   age: 36 }
  // 2. Robert Downey:
  // { firstName: 'Robert',
  //   lastName: 'Downey',
  //   gender: 'Male',
  //   age: 'Invalid Birth Year' }
  changeMe([]); // ""
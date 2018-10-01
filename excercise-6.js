function hitungHuruf(kata) {
    var splitted = kata.split(" ");
  
  
  //perulangan tiap kata
   var hurufBerulang = [];
    for(var i=0; i<splitted.length; i++){
      var jumlahModus = "";
     counter = ""
  
      for(var j=0; j<splitted[i].length; j++){
        
        for(var k=j; k<splitted[i].length; k++){
          if( (splitted[i][j] == splitted[i][k]) &&k!==j){
            counter = counter + splitted[i][j];
            break;
          }
        } if(jumlahModus !== counter){
        jumlahModus = jumlahModus + counter;}
      counter = ""}
      // console.log(i , jumlahModus);
      hurufBerulang.push(jumlahModus);
    }
    // console.log(hurufBerulang)
  
    var posisiBerulang = []
    for(i=0; i <hurufBerulang.length; i++){
      var hurufBerbeda = 0;
      var diffCounter = 0;
  
      if(hurufBerulang[i].length == 0){
        posisiBerulang.push(0);
      } else if(hurufBerulang[i].length !== 0) { 
        posisiBerulang.push(hurufBerulang[i].length)
      }
  
     
        
      
  
  
    }
    maxModus= Math.max.apply(null, posisiBerulang)
    return splitted[posisiBerulang.indexOf(maxModus)];
  
  }
  
  // TEST CASES
  console.log(hitungHuruf('Today, is the greatest day ever')); // greatest
  console.log(hitungHuruf('I am a passionate developer')); // passionate
  console.log(hitungHuruf('aku adalah anak gembala')); // adalah
  console.log(hitungHuruf('rajin pangkal kaya')); // pangkal
  console.log(hitungHuruf('mengayuh perahu di danau')); // danau
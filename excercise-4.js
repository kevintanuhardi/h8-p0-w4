//CARI MODUS
function cariModus(arr) {
    jumlahModus =[];
    //cari lokasi modus
    for(i=0; i<arr.length; i++){
      counter = -1;
      for(j=0; j<arr.length; j++){
        if(arr[i]==arr[j]){
          counter ++;
        }
      }
      jumlahModus.push(counter);
    }
    //return modus
  
    var maxModus= Math.max.apply(null, jumlahModus);
    if(maxModus == 0 || maxModus == (arr.length - 1)){
      return -1
    } else{
    return arr[jumlahModus.indexOf(maxModus)]
  }
  }
  
  // TEST CASES
  console.log(cariModus([10, 4, 5, 2, 4])); // 4
  console.log(cariModus([5, 10, 10, 6, 5])); // 5
  console.log(cariModus([10, 3, 1, 2, 5])); // -1
  console.log(cariModus([1, 2, 3, 3, 4, 5])); // 3
  console.log(cariModus([7, 7, 7, 7, 7])); // -1
//UBAH HURUF

function ubahHuruf(kata) {
    var alphabet = "abcdefghijklmnopqrstuvwxyz"
    var newKata = "";
  
    for(i=0; i<kata.length; i++){
      newKata = newKata + alphabet[alphabet.indexOf(kata[i])+1]
    }
    return newKata
  }
  
  // TEST CASES
  console.log(ubahHuruf('wow')); // xpx
  console.log(ubahHuruf('developer')); // efwfmpqfs
  console.log(ubahHuruf('javascript')); // kbwbtdsjqu
  console.log(ubahHuruf('keren')); // lfsfo
  console.log(ubahHuruf('semangat')); // tfnbohbu
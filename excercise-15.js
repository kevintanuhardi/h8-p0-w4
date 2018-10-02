function changeVocals (str) {
    var result = "";
    var alphabet = "abcdefghijklmnopqrstuvwxyz";
    var vocals = "aiueoAIUEO";
    
    for(var i = 0; i < str.length; i++){
  
      for(j = 0; j < vocals.length; j++){
        
        if(j <= 4 && vocals[j] === str[i]){
          result += alphabet[alphabet.indexOf(str[i])+1]
        } else if(j >= 5 && vocals[j] === str[i]){
          result += alphabet[alphabet.indexOf(str[i].toLowerCase())+1].toUpperCase();
        }
      }
      if(result.length < i + 1){
        result+= str[i];
      }
  
    }
      return result;
  }
    
  
  function reverseWord (str) {
    var result = str.split("").reverse().join("");
  
    return result
  }
  
  function setLowerUpperCase (str) {
    result = "";
    for(var i = 0 ; i < str.length; i++){
      if(str[i] === str[i].toUpperCase()){
        result += str[i].toLowerCase();
      }else if(str[i] === str[i].toLowerCase()){
        result += str[i].toUpperCase();
      }else {
        result += str[i];
      }
    }
    return result
  }
  
  function removeSpaces (str) {
    return str.split(" ").join("");
  }
  
  function passwordGenerator (name) {
    var diffVocal = changeVocals(name);
    var reversed = reverseWord(diffVocal);
    var lowerUpper = setLowerUpperCase(reversed);
    var trimmed = removeSpaces(lowerUpper);
  
    if(name.length <= 5){
      return "Minimal karakter yang diinputkan adalah 5 karakter";
    }else{
    return trimmed
    }
  }
  
  console.log(passwordGenerator('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
  console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
  console.log(passwordGenerator('Alexei')); // 'JFXFLb'
  console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'

function translatePigLatin(str) {
  function isVowel(char) {
    return ['a', 'e', 'i', 'o', 'u'].indexOf(char) !== -1;
  }
  myArr = str.split('');
  
  if (isVowel(myArr[0])) {
    myArr.push("way");
    return myArr.join('');
  }

  for (var key in str) {
    if (!isVowel(myArr[key])) {
      
      myArr.push(myArr.shift(key));
      
      if (isVowel(myArr[key])) {
        myArr.push("ay");
        return myArr.join('');
      }
    }
  }
  
}

translatePigLatin("glove");

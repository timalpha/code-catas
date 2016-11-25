function rot13(str) {
  var newStr = '';
  var charCode = 0;
  
  for (i = 0; i < str.length; i++) {
    charCode = str.charCodeAt(i);
    if (charCode < 65 || charCode > 90) {
      newStr += String.fromCharCode(charCode);
    }
    else if (charCode < 78) {
      newStr += String.fromCharCode((charCode + 13));
    }
    else {
      newStr += String.fromCharCode((charCode - 13));
    }
  }
  return newStr;
}

rot13("SERR PBQR PNZC");
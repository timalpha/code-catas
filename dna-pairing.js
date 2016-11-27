function pairElement(str) {
  
  obj = {
    "G": "C",
    "C": "G",
    "A": "T",
    "T": "A"
  };
  newArr = [];
  for (var char in str) {
    newArr.push([str[char], obj[str[char]]]);
  }
  return newArr;
}

pairElement("GCG");

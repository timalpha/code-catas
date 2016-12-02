function steamrollArray(arr) {
  var newArr = [];
  
  arr.map(function flatten(key) {
    if (!Array.isArray(key)) {
      newArr.push(key);
    }
    else {
      for (var level in key) {
        flatten(key[level]);
      }
    }
  });

  return newArr;
}

steamrollArray([1, [2], [3, [[4]]]]);

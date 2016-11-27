function uniteUnique(arr) {
  var args = Array.from(arguments);
  var newArr = [];
  
  return args.reduce(function(a, b) {
      return a.concat(b);
    }, []).filter(function(x) {
    if (newArr.indexOf(x) === -1) {
      newArr.push(x);
      return true;
    }
    return false;
  });
  
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);

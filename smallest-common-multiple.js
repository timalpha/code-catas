function smallestCommons(arr) {
  
  arr.sort(function(a, b) {
    return b - a;
  });
  
  var newArr = [];
  for (var i = arr[0]; i >= arr[1]; i--) {
    newArr.push(i);
  }

  return newArr.reduce(function(x, y) {
    var g = gcd(x, y);
    return (x * y) / g;
  });

  function gcd(a, b) {
    if (b === 0) {
       return a;
    }
    return gcd(b, a % b);
  }
  
}

smallestCommons([1,5]);

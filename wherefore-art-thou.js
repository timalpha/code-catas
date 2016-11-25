function whatIsInAName(collection, source) {
  
  return collection.filter(function (object) {
    for (var key in source) {
      
      if (!object.hasOwnProperty(key) || object[key] !== source[key]) {
        return false;
      }
    }
    return true;
  });
  
}
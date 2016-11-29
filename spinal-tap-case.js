function spinalCase(str) {
  return str.replace(/([a-z])([A-Z])/g, '$1 $2')
    .toLowerCase().split(/(?:_| )+/).join('-');
}

spinalCase('The_Andy_Griffith_Show');
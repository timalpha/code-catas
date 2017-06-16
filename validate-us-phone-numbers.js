function telephoneCheck(str) {
  return str == str.match(/(?:^1\s?)?(?:(?:\(\d{3}\))|\d{3})[\s-]?\d{3}[\s-]?\d{4}/);
}

telephoneCheck("1 555-555-5555");
function repeatStringNumTimes(str, num) {
    if (num < 1) {
    return "";
  } else if (num === 1) {
    return str;
  } else {
    return str + repeatStringNumTimes(str, num - 1);
  }

  return str;
}

repeatStringNumTimes("abc", 3);

var romanToInt = function (str) {
  const romanValues = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let sum = 0;
  let prev = 0;
  for (i = 0; i < str.length; i++) {
    let current = romanValues[str[i]];
    if (prev < current) {
      sum -= prev;
    } else {
      sum += prev;
    }
    prev = current;
  }
  sum += prev;
  return sum;
};

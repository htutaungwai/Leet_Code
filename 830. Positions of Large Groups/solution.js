/**
 * @param {string} s
 * @return {number[][]}
 */
var largeGroupPositions = function (s) {
  const output = [];
  let firstIndex = 0;

  for (let i = 0; i < s.length + 1; i++) {
    if (s[i] !== s[i - 1]) {
      if (i - firstIndex >= 3) {
        output.push([firstIndex, i - 1]);
      }

      firstIndex = i;
    }
  }

  return output;
};

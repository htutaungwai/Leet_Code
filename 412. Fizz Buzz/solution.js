/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function (n) {
  const sampleArray = [];
  for (let i = 1; i <= n; i++) {
    let sampleItem = "";
    if (i % 3 === 0 || i % 5 === 0) {
      if (i % 3 === 0 && i % 5 === 0) {
        sampleItem += "FizzBuzz";
      } else {
        i % 3 === 0 ? (sampleItem += "Fizz") : (sampleItem += "Buzz");
      }
    } else {
      sampleItem += `${i}`;
    }
    sampleArray.push(sampleItem);
  }

  console.log(sampleArray);
};

fizzBuzz(15);

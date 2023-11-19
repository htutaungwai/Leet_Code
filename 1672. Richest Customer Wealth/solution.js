/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function (accounts) {
  let maxWealth = 0;
  accounts.forEach((account) => {
    let wealth = 0;
    for (let i = 0; i < account.length; i++) {
      wealth += account[i];
    }
    wealth > maxWealth ? (maxWealth = wealth) : maxWealth;
  });

  return maxWealth;
};

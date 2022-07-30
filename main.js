const findMaxProfit = (arr) => {
  if (arr.length === 0 || arr.length === 1) {
    return 0;
  }

  let maxProfit = 0;

  if (arr[0] > arr[1]) {
    arr.splice(0, 1);
    return findMaxProfit(arr);
  }

  if (arr[0] < arr[1]) {
    maxProfit = arr[1] - arr[0];
    arr.splice(1, 1);
    return Math.max(maxProfit, findMaxProfit(arr));
  }

};

module.exports = findMaxProfit;

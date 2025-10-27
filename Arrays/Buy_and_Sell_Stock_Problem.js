var maxProfit = function(prices = [7, 5, 3, 6, 40, 10]) {
  let maxProfit = 0;
  let bestBuy = prices[0];

  for (let day = 0; day < prices.length; day++) {
    if (prices[day] > bestBuy) {
      maxProfit = Math.max(maxProfit, prices[day] - bestBuy);
    }
    bestBuy = Math.min(bestBuy, prices[day]); // keep lowest price so far
  }
  if (maxProfit>0) {
    return maxProfit; // ✅ must return the result
  }else{
    return 0;
  }
};

console.log("Maximum Profit:", maxProfit());

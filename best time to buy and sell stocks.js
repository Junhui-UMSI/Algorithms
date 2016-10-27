var maxProfit = function(prices) {
    console.log(prices);
    var min = Number.POSITIVE_INFINITY;
    var result = 0;
      for(var i=0; i < prices.length; i++){
        if(prices[i] < min){
            min = prices[i];
        }
        else if(prices[i]> min && prices[i]-min>result){
            max = prices[i];
            result = prices[i] - min;
        }
    }
    return result;
};

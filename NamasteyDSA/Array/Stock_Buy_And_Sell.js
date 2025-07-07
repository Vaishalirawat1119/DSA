function sellAndBuy(prices){
    let min = prices[0];
    let maxProfit = 0;

    for(let i = 1; i < prices.length; i++){
        if(prices[i]-min > maxProfit){
            maxProfit = prices[i]-min;
        }
        if(prices[i] < min){
            min = prices[i];
        }
    }
    return maxProfit;
}
let prices = [7,1,5,2,6,4];
console.log(sellAndBuy(prices));
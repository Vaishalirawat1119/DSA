function buySellStock(prices){
    let ans = 0;
    for(let i=1; i<prices.length; i++){
        let profit = prices[i] - prices[i-1];
        if(profit > 0){
            ans += profit;
        }
    }
    return ans;
}

console.log(buySellStock([7,1,5,3,6,4]));
console.log(buySellStock([1,2,3,4,5]));
console.log(buySellStock([7,6,4,3,1]));
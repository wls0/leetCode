function maxProfit(prices: number[]): number {
    let min = prices[0];
    let price = 0;
    for(const a of prices){
        if(a <= min){
            min = a
            continue;
        }

       const sellPrice = a - min;
        if(sellPrice >= price){
            price = sellPrice
        }

    }

    return price;
};
// https://leetcode.com/problems/best-time-to-buy-and-sell-stock/

function maxProfit(prices: number[]): number {
    let bestProfit = 0;
    for (let buyDayIndex: number = 0; buyDayIndex < prices.length; buyDayIndex++) {
        for (let sellDayIndex: number = buyDayIndex + 1; sellDayIndex < prices.length - 1; sellDayIndex++) {
            let profit = prices[sellDayIndex] - prices[buyDayIndex];
            if (profit > bestProfit) {
                bestProfit = profit;
            }
        }
    }

    return bestProfit;
};
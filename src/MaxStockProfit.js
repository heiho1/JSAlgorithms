function maxStockProfit(pricesArr) {
    let min = pricesArr[0];
    let max = pricesArr[0];
    for (var i=1; i<pricesArr.length; i++) {
        if (min > pricesArr[i]) {
            min = pricesArr[i];
        }
        if (max < pricesArr[i]) {
            max = pricesArr[i];
        }
    }
    if (min === max) {
        return -1;
    }
    return max - min;
}
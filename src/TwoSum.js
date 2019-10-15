function twoSum(numArr, sum) {
    let pairs = [];
    let hashes = [];

    for (var i=0; i<numArr.length; i++) {
        let cur = numArr[i];
        let reflex = sum - cur;
        if (hashes.indexOf(reflex) !== -1) {
            pairs.push ([cur, reflex]);
        } 
        hashes.push(cur);
    }
    return pairs;
}
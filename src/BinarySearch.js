function binarySearch(numArr, key) {
    numArr.sort((a, b) => a - b);
    console.log(numArr, key);
    let arrLen = numArr.length;
    let median = Math.floor(arrLen / 2);
    let cmp = numArr[median];
    if (cmp === key) {
        return true;
    } else if (cmp > key && numArr.length > 1) {
        return binarySearch(numArr.slice(0, median), key);
    } else if (numArr.length > 1) {
        return binarySearch(numArr.slice(median), key);
    }
    return false;
}
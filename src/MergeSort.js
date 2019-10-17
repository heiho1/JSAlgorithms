function mergeSort(arr) {
    if (arr.length < 2) {
        return arr;
    }
    let midIdx = Math.floor(arr.length / 2);
    let first = arr.slice(0, midIdx);
    let second = arr.slice(midIdx);
    return merge(mergeSort(first), mergeSort(second));
}

function merge(arr1, arr2) {
    let ret = [];
    while (arr1.length && arr2.length) {
        var minElem;
        if (arr1[0] < arr2[0]) {
            minElem = arr1.shift();
        } else {
            minElem = arr2.shift();
        }
        ret.push(minElem);
    }
    if (arr1.length) {
        ret = ret.concat(arr1);
    } else if (arr2.length) {
        ret = ret.concat(arr2);
    }
    return ret;
}
function reverseArrayInPlace(arr) {
    for (var i=0; i<arr.length / 2; i++) {
        let tmp = arr[i];
        arr[i] = arr[arr.length - 1 - i];
        arr[arr.length - 1 - i] = tmp;
    }
    return arr;
}
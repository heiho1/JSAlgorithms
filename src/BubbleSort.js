function bubbleSortRecursive(arr) {
    if (arr.length != 1) {
        for (var i = 0; i < arr.length; i++) {
            console.log(arr[i], arr[i + 1]);
            if (arr[i] > arr[i + 1]) {
                let tmp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = tmp;
                console.log(arr);
            }
        }
        bubbleSort(arr.slice(0, arr.length - 1));
    }
}

function bubbleSortIterative(arr) {
    let end = arr.length;
    while (end > 0) {
        for (var i = 0; i < end; i++) {
            if (arr[i] > arr[i + 1]) {
                let tmp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = tmp;
            }
        }
        end--;
    }
    return arr;
}
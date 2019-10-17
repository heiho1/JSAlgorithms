function sieveOfEratosthenes(num) {
    let arr = [];
    for (var i=0; i<num; i++) {
        arr[i] = true;
    }
    arr[0] = false;
    arr[1] = false;
    for (var i=2; i<Math.sqrt(num); i++) {
        for (var j=2; j * i <= num; j++) {
          arr[i*j] = false;
        }
    }
    let ret = [];
    for (var i=0; i<arr.length; i++) {
        if (arr[i]) {
            ret.push(i);
        }
    }
    return ret;
}

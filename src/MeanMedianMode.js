function mean(arr) {
    let sum = 0;
    arr.forEach(val => sum += val);
    return sum / arr.length;
}

function median(arr) {
    arr.sort(function(a, b) {
        return a - b;
    });
    if (arr.length % 2 != 0) {
        return arr[Math.floor(arr.length / 2)];
    }
    let ret = arr[(arr.length / 2) - 1] + arr[arr.length / 2];
    return ret / 2;
}

function mode(arr) {
    let mode = {};
    arr.forEach(val => {
        if (!mode[val]) {
            mode[val] = 0;
        } 
        mode[val]++;
    });
    let maxFreq = 0;
    let ret = [];
    for( var num in mode) {
        if (mode[num] > maxFreq) {
            ret = [num];
            maxFreq = mode[num];
        } else if (mode[num] === maxFreq) {
            ret.push(num);
        }
    }
    if (ret.length === Object.keys(mode).length) {
        ret = [];
    }
    return ret;
}

function meanMedianMode(arr) {
    return {
        mean : mean(arr),
        median : median(arr),
        mode : mode(arr)
    };
}
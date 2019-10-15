function fibMemo(index, cache) {
    if (!cache) {
        cache = [];
    }
    if (cache[index]) {
        return cache[index];
    } else {
        if (index === 1 || index === 2) {
            return 1;
        } else {
            cache[index] = fibMemo(index - 1, cache) + fibMemo(index - 2, cache);
        }
    }
    return cache[index];
}
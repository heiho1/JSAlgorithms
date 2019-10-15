function reverseWords(aString) {
    let words = aString.split(' ');
    let retString = [];
    words.forEach(word => {
        let tmpWord = '';
        for (var i = word.length - 1; i > -1; i--) {
            tmpWord += word[i];
        }
        retString.push(tmpWord);
    });
    return retString.join(' ');
}
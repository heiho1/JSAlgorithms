function caesarCipher(str, num) {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
    num = num % alphabet.length;
    let lowerCase = str.toLowerCase();
    let cipher = '';
    for (var i=0; i<lowerCase.length; i++) {
        let current = lowerCase[i];
        let curIdx = alphabet.indexOf(current);
        if (curIdx < 0) {
            cipher += current;
            continue;
        }
        let newIdx = curIdx + num;
        if (newIdx > alphabet.length) {
            newIdx = newIdx - alphabet.length;
        } else if (newIdx < 0) {
            newIdx = newIdx + alphabet.length;
        }
        if (str[i] === str[i].toUpperCase()) {
            cipher += alphabet[newIdx].toUpperCase();
        } else {
            cipher += alphabet[newIdx];
        }
    }
    return cipher;
}

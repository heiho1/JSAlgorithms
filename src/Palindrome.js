function isPalindrome(phrase) {
    let lowerPhrase = phrase.toLowerCase();
    let charsArr = lowerPhrase.split('');
    const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
    var lettersArr = [];
    charsArr.forEach(char => {
        if (alphabet.indexOf(char) > -1) {
            lettersArr.push(char);
        }
    });
    return lettersArr.join('') == lettersArr.reverse().join('');
}

isPalindrome("Madam I'm Adam");
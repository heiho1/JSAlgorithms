function harmlessRansomNote(noteText, magazineText) { //O(m+n)
    let noteArr = noteText.split(' ');
    let magazineArr = magazineText.split(' ');
    let magazineObj = {};
    magazineArr.forEach( word => {
        if (!magazineObj[word]) {
            magazineObj[word] = 0;
        } 
        magazineObj[word]++;
    });
    
    let isPossible = true;
    noteArr.forEach( word => {
        if (magazineObj[word]) {
            magazineObj[word]--;
            if (magazineObj[word] < 0) {
                isPossible = false;
            }
        } else {
            isPossible = false;
        }
    });
    return isPossible;
}
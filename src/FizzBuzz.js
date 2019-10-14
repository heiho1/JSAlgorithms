function fizzbuzz(num) { //O(n^2)
    for (var i=1; i <= num; i++) {
        let isDivBy3 = i % 3 == 0;
        let isDivBy5 = i % 5 == 0;
        let isDivByBoth = isDivBy3 && isDivBy5;
        if (isDivByBoth) {
            console.log('fizzbuzz');
        } else if (isDivBy3) {
            console.log('fizz');
        } else if (isDivBy5) {
            console.log('buzz');
        }
    }
}
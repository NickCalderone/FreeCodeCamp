function sumPrimes(num) {
    let deck = [];
    for (let i = 3; i <= num; i++) {
        deck = deck.concat(i);
    }
    //console.log(deck);

    deck = deck.filter(x => {
        let test = true;
        for (let y = 2; y < x; y++) {
            //console.log("x ", x, "y ", y);
            if (x % y == 0) {
                test = false;
            }
        }
        return test;
    });
    //console.log("deck ", deck);
    deck = deck.concat(2);
    //console.log("lkdjf", deck);
    deck = deck.reduce((sum, x) => sum + x);
    //console.log(deck);
    return deck;
}

console.log(sumPrimes(977));

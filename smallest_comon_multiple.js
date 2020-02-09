function smallestCommons(arr) {
    if (arr[0] > arr[1]) {
        arr = [arr[1], arr[0]];
    }

    let deck = [];

    for (let i = arr[0]; i <= arr[1]; i++) {
        deck = deck.concat(i);
    }
    console.log(deck);

    let divisors = deck.slice(0, deck.length - 1);
    console.log("divisors ", divisors);

    let root = deck[deck.length - 1];
    console.log("root ", root);
    let accumulator = root;

    while (
        !divisors.reduce((sum, next) => {
            return sum && accumulator % next == 0;
        }, true)
    ) {
        accumulator = accumulator + root;
    }
    console.log(accumulator);
    return accumulator;
}

smallestCommons([10, 5]);

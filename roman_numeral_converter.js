function convertToRoman(num, carried = []) {
    let answer;
    let storage = { M: 1000, D: 500, C: 100, L: 50, X: 10, V: 5, I: 1 };
    //let key = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };
    let key = Object.entries(storage)
        .slice()
        .sort((a, b) => b[1] - a[1]);
    //console.log(key);

    let firstDivisable = key.find(x => num - x[1] >= 0);
    console.log(firstDivisable);
    if (num / firstDivisable[1] < 4) {
        let mult = Math.floor(num / firstDivisable[1]);
        console.log(firstDivisable[0].repeat(mult));
        carried = carried.concat(
            firstDivisable[0].repeat(Math.floor(num / firstDivisable[1]))
        );
        num = num - firstDivisable[1] * mult;
    } else {
        let index = key.indexOf(firstDivisable);
        carried = carried.concat(key[index][0].concat(key[index - 1][0]));
        num = num - (key[index - 1][1] - key[index][1]);
    }
    if (num > 0) {
        return convertToRoman(num, carried);
    } else return carried.join("");
}

console.log(convertToRoman(891));

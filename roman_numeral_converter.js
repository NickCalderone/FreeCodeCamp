function convertToRoman(num, carried = []) {

    let storage = { M: 1000, D: 500, C: 100, L: 50, X: 10, V: 5, I: 1 };

    let bank = Object.entries(storage)
        .slice()
        .sort((a, b) => b[1] - a[1]);

    let firstDivisable = bank.find(x => num - x[1] >= 0);
    let firstIndex = bank.indexOf(firstDivisable)
    let [key, val] = firstDivisable
    let [smallerKey, smallerVal] = bank[firstIndex + 1]
    let [largerKey, largerVal] = bank[firstIndex - 1]
 
    if (num / val < 4) {
        if ((num % val) / smallerVal > 3){
            carried = carried.concat(largerKey, smallerKey.repeat((largerVal % val) % smallerVal))
        } else if ((num % val) % key[smallerVal] <= key[smallerVal] * 3){
        let mult = Math.floor(num / val);
        console.log(key.repeat(mult));
        carried = carried.concat(
            key.repeat(Math.floor(num / val))
        );
        num = num - val * mult;
        } else {
        let index = key.indexOf(firstDivisable);
        carried = carried.concat(key[index][0].concat(key[index - 1][0]));
        num = num - (key[index - 1][1] - key[index][1]);
    }
    if (num > 0) {
        return convertToRoman(num, carried);
    } else return carried.join("");
}}

console.log("answer ",convertToRoman(9));
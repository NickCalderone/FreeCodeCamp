function convertToRoman(num, carried = '') { 
    if (num > 0){ 
        let storage = { M: 1000, D: 500, C: 100, L: 50, X: 10, V: 5, I: 1 };

        let bank = Object.entries(storage)
            .slice()
            .sort((a, b) => b[1] - a[1]);

        let [key, val] = bank.find(x => num - x[1] >= 0);

        carried = carried.concat(
            key.repeat(Math.floor(num / val))
        )
        num = num % val
        
        return convertToRoman(num, carried)
    }
    console.log(carried)
    carried.replace(/D{4}/, 'CD', /D{3}/, 'CCD', )
    console.log(carried)

    return num, carried
}

console.log("answer ",convertToRoman(3999));
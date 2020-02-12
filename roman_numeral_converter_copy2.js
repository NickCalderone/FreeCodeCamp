function convertToRoman(num, carried = '') { 
    // let storage = { M: 1000, D: 500, C: 100, L: 50, X: 10, V: 5, I: 1 };

    // let bank = Object.entries(storage)
    //     .slice()
    //     .sort((a, b) => b[1] - a[1]);

    let bank = [
        'M' ,
        'D' ,
        'C' ,
        'L' ,
        'X' ,
        'V' ,
        'I' 
    ]
    let startingAt = 0
    function test(dig){

        let place = startingAt
        startingAt = startingAt + 2

        if (dig == 0){
            return
        } else if (dig / 10 >= .9){
            return bank[place + 2].repeat(10 - dig).concat(bank[place])
        } else if (dig / 5 >= .8 && dig / 5 < 1){
            return bank[place + 2].repeat(5 - dig).concat(bank[place + 1])
        } else if (dig >= 5){
            return bank[place + 1].concat(bank[place + 2].repeat(dig - 5))
        } else if (dig < 5){
            return bank[place + 2].repeat(dig)
        } else return "broken"
    }
    // make array for each place of number
  let arr = JSON.stringify(num).padStart(4, '0').split('').map(x => parseInt(x))
  let subArr = arr.slice(1)

  console.log(arr)

  subArr = subArr.map(x =>test(x))

  let returnArr = ['M'.repeat(arr[0])].concat(subArr)

  return returnArr.join("")
    


}

console.log("answer ",convertToRoman(68));
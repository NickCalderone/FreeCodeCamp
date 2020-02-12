function convertToRoman(num, carried = '') { 
    let bank = [ 'M', 'D', 'C', 'L', 'X', 'V', 'I' ]
    let startingAt = 0

    function test(dig){

        let place = startingAt
        startingAt = startingAt + 2
        let ten = bank[place]
        let five = bank[place + 1]
        let one = bank[place + 2]

        if (dig >= 5){
            return dig == 9 ? one.concat(ten) : five.concat(one.repeat(dig - 5)) 
        } else if (dig < 5){
            return dig == 4 ? one.concat(five) : one.repeat(dig)
        } else {
            console.log("func test() error")
            return -1
        }

    }

  let arr = JSON.stringify(num).padStart(4, '0').split('').map(x => parseInt(x))
  let subArr = arr.slice(1)
  return ['M'.repeat(arr[0])].concat(subArr.map(x => test(x))).join("")
}

console.log("answer ",convertToRoman(68));
function sumFibs(num) {
    let fibNums = [1,1]
    
    while (fibNums[fibNums.length-1] < num){
        if (fibNums[fibNums.length-1] + fibNums[fibNums.length-2] > num){
        break 
        } else {
        fibNums = fibNums.concat(fibNums[fibNums.length-1] + fibNums[fibNums.length-2])
        }
    }

    num = fibNums.reduce((sum, next) =>{
        if (next % 2 != 0){
            return sum + next
        } else {
            return sum
        }
    })
    return num;
}

  sumFibs(4);
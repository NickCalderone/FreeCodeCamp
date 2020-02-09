function uniteUnique(arr) {
    console.log(arguments)
    let test = arguments
    //console.log("test", typeof test, test)
    let answer = []
    for (let x in test){
        for (let y in test[x]){
            if (!answer.includes(test[x][y])){
                console.log("test[x][y]",test[x][y])
                answer = answer.concat(test[x][y])
            }
        }
    }
    console.log(answer)
    return answer
}
  
  uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
  
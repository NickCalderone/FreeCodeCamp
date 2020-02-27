function checkCashRegister(price, cash, cid) {
    let bank = cid.map(x => makeBank(x)).sort((x,y) => y[2] - x[2])
    console.log("bank", bank)
    let total = (cash * 100) - (price * 100)
    console.log("total", total)
    let register = {
        status: "OPEN",
        change: []
    }

    let registerTotal = bank.reduce((a,b) => {return a + (b[1] * b[2])}, 0)
    console.log("total", total, "registerTotal", registerTotal)
    if (total == registerTotal){
        let isEqual = {status: "CLOSED", change: cid}
        console.log("isEqual",isEqual)
        return isEqual
    }

    function makeBank(unit){
        let newUnit = [unit[0], unit[1] * 100]

        switch (newUnit[0]){
            case "PENNY":
               return newUnit.concat(1)
            case "NICKEL":
                return newUnit.concat(6)
            case "DIME":
                return newUnit.concat(10)
            case "QUARTER":
                return newUnit.concat(25)
            case "ONE":
                return newUnit.concat(100)
            case "FIVE":
                return newUnit.concat(500)
            case "TEN":
                return newUnit.concat(1000)
            case "TWENTY":
                return newUnit.concat(2000)
            case "ONE HUNDRED":
                return newUnit.concat(10000)
            default:
                return newUnit.concat("makeBank() error")
        }
    }

    function nextUnit(totalLeft, bankState){
        let newTotal;
        let index = bankState.findIndex(next => {
            let [, quantity, unit] = next
            return (unit - totalLeft <= 0 && quantity > 0)
        })
        console.log("next unit output", bankState[index])

        if (index == -1){
            console.log("index is -1",register)
            return register
        }


        let [name, quan, un] = bankState[index]
        console.log("name, quan, un", name, quan, un)
        let changeQuan = Math.floor(totalLeft / un) * un
        console.log(totalLeft, "testing", Math.floor(totalLeft % un), "changeQuan ",changeQuan)
        if (changeQuan >= quan){
            register.change = register.change.concat([[name, quan / 100]])
            console.log("troubleshooting ",totalLeft, quan.toFixed(2))
            newTotal = totalLeft - quan
            console.log("changequan morethan or equal quan. newTotal: ",newTotal)
            bankState[index] = [name, 0]
        } else {
            register.change = register.change.concat([[name, changeQuan /100]])
            newTotal = totalLeft - changeQuan
            console.log("changequan less than quan. newTotal ", newTotal)
            bankState[index] = [name, quan - changeQuan]
        }
        if (totalLeft > 0){
            if (index == 8 && totalLeft > quan){
                register = {status: "INSUFFICIENT_FUNDS", change: []}
            }
            console.log("newtotal left is: ", newTotal)
            return nextUnit(newTotal, bankState)
        } else return 
    }
    console.log(nextUnit(total, bank))
    return register
}
  
  // Example cash-in-drawer array:
  // [["PENNY", 1.01],
  // ["NICKEL", 2.05],
  // ["DIME", 3.1],
  // ["QUARTER", 4.25],
  // ["ONE", 90],
  // ["FIVE", 55],
  // ["TEN", 20],
  // ["TWENTY", 60],
  // ["ONE HUNDRED", 100]]
  
  checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]])

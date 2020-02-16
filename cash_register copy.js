function checkCashRegister(price, cash, cid) {
    let bank = cid.map(x => makeBank(x)).sort((x, y) => y[2] - x[2]);
    let total = Math.round(cash * 100) - Math.round(price * 100);
    console.log("total", total);
    let register = {
        status: "OPEN",
        change: []
    };

    function makeBank(unit) {
        let newUnit = [unit[0], Math.round(unit[1] * 100)];

        switch (newUnit[0]) {
            case "PENNY":
                return newUnit.concat(1);
            case "NICKEL":
                return newUnit.concat(5);
            case "DIME":
                return newUnit.concat(10);
            case "QUARTER":
                return newUnit.concat(25);
            case "ONE":
                return newUnit.concat(100);
            case "FIVE":
                return newUnit.concat(500);
            case "TEN":
                return newUnit.concat(1000);
            case "TWENTY":
                return newUnit.concat(2000);
            case "ONE HUNDRED":
                return newUnit.concat(10000);
            default:
                return newUnit.concat("makeBank() error");
        }
    }

    function reducer(sum, next) {
        let [name, stored, unit] = next;
        if (sum === 0 || stored === 0 || unit > sum) {
            register.change = register.change.concat([[name, 0, unit]]);
            console.log("first", next, sum);
            return sum;
        } else if (stored === sum) {
            register.change = register.change.concat([
                [name, stored / 100, unit]
            ]);
            console.log("second", next, sum);
            return 0;
        } else if (stored < sum) {
            register.change = register.change.concat([
                [name, Math.round(stored / 100), unit]
            ]);
            console.log("third", next, sum);
            return sum - stored;
        } else {
            let quan = Math.floor(sum / unit) * unit;
            register.change = register.change.concat([
                [name, quan / 100, unit]
            ]);
            console.log("fourth", next, sum);
            return sum - quan;
        }
    }

    let test = bank.reduce(reducer, total);

    let newBank = register.change.sort((x, y) => x[3] - y[3]);

    if (test > 0) {
        return { status: "INSUFFICIENT_FUNDS", change: [] };
    }

    console.log(
        "test",
        newBank,
        JSON.stringify(register.change),
        JSON.stringify(cid)
    );

    console.log(test, register);
    return register;
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

checkCashRegister(19.5, 20, [
    ["PENNY", 0.5],
    ["NICKEL", 0],
    ["DIME", 0],
    ["QUARTER", 0],
    ["ONE", 0],
    ["FIVE", 0],
    ["TEN", 0],
    ["TWENTY", 0],
    ["ONE HUNDRED", 0]
]);

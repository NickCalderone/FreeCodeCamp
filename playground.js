let arr = [1, 2, 3, 4, 5];
function test(arr) {
    let x = 1;
    let returnArr = arr.reduce((sum, next) => {
        console.log(x);
        x += 2;
        return sum + next;
    });
    console.log(returnArr);
    return returnArr;
}

test(arr);

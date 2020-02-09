function palindrome(str) {
    str = str
        .toLowerCase()
        .replace(/[_\W\s]+/gi, "")
        .split("");
    let reverse = [...str].reverse();
    if (str.join() == reverse.join()) {
        return true;
    } else return false;
}

console.log(palindrome("My 78ym111111."));

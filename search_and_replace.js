function myReplace(str, before, after) {
    let beforeUpper = new RegExp(
        before[0].toUpperCase().concat(before.slice(1))
    );
    let beforeLower = new RegExp(before);
    str.match(beforeUpper)
        ? (str = str.replace(
              beforeUpper,
              after[0].toUpperCase().concat(after.slice(1))
          ))
        : (str = str.replace(beforeLower, after));
    console.log(str);
    return str;
}

myReplace("A quick brown fox Jumped over the Lazy dog", "jumped", "leaped");

function pairElement(str) {
    let separated = str.split("");
    console.log(separated);
    let newStr = [];
    separated.forEach(value => {
        switch (value) {
            case "A":
                newStr.push(["A", "T"]);
                break;
            case "T":
                newStr.push(["T", "A"]);
                break;
            case "G":
                newStr.push(["G", "C"]);
                break;
            case "C":
                newStr.push(["C", "G"]);
                break;
            default:
                console.log("didnt work");
        }
    });
    console.log(newStr);
    return newStr;
}

pairElement("GCG");

function fearNotLetter(str) {
    let answer = undefined;
    let separated = str.split("").map(x => x.charCodeAt(0));
    for (let i = 0; i < separated.length - 1; i++) {
        if (separated[i] + 1 !== separated[i + 1]) {
            answer = String.fromCharCode(separated[i] + 1);
        }
    }
    return answer;
}

fearNotLetter("abce");

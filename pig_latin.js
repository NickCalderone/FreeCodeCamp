function translatePigLatin(str) {
    let vowel_none;

    if (/^[aeiou].*$/.test(str)) {
        vowel_none = str.replace(/(^[aeiou].*)/gi, "$1way");
    } else if (/(^[^aeiou]*$)/.test(str)) {
        vowel_none = str.replace(/(^[^aeiou]*$)/, "$1ay");
    } else if (/^[^aeiou]*[aeiou].*/.test(str)) {
        vowel_none = str.replace(/(^[^aeiou]*)([aeiou].*)/, "$2$1ay");
    }

    return vowel_none;
}

translatePigLatin("rcb");

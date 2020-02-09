let sampleWord = "astronaut";
let pwRegex = /^[a-z](?=.{5,})(?=.*\d{2})/; // Change this line
let result = pwRegex.test(sampleWord);

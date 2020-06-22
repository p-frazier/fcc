let sampleWord = "astronaut";
let pwRegex = /^(?=\w{6,})(?=.*\d{2})^\D/;
let result = pwRegex.test(sampleWord);

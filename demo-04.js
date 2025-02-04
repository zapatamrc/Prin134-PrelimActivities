function hashString(input) {
    let hashedString = "";
    let changedChars = [];

    for (let i = 0; i < input.length; i++) {
        if (i % 2 === 0) {
            changedChars.push(input[i]);
            hashedString += "*";
        } else {
            hashedString += input[i]; 
        }
    }

    console.log("Input String:", input);
    console.log("Output String:", hashedString);
    console.log("Hashed Characters:", changedChars.join(","));
}

// Example usage
hashString("Watch me whip, watch me nae nae");

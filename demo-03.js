function separateNum(numbers) {
    let evenNumbers = [];
    let oddNumbers = [];

    for (let num of numbers) {
        if (num % 2 === 0) {
            evenNumbers.push(num);
        } else {
            oddNumbers.push(num);
        }
    }

    console.log("Numbers:",numbersArray)
    console.log("Even Numbers:", evenNumbers, "| Count:", evenNumbers.length);
    console.log("Odd Numbers:", oddNumbers, "| Count:", oddNumbers.length);
}

let numbersArray = [12, 7, 5, 20, 33, 42, 19, 8, 10];
separateNum(numbersArray);

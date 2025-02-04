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

    return { evenNumbers, oddNumbers }; 
}

let numbersArray = [12, 7, 5, 20, 33, 42, 19, 8, 10];
let { evenNumbers, oddNumbers } = separateNum(numbersArray); 

let even = `Even Numbers: ${evenNumbers.join(', ')} | Count: ${evenNumbers.length}`;
let odd = `Odd Numbers: ${oddNumbers.join(', ')} | Count: ${oddNumbers.length}`;

console.log("Numbers:", numbersArray.join(', '));
console.log(even);
console.log(odd);

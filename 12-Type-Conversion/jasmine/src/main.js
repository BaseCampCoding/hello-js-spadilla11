// Task 1: Calculate the Sum for the Slot Machine
let digits1 = [1, 7, 3];
let digits2 = [3, 7, 1];

let number1 = digits1.join("");
let number2 = digits2.join("");

let twoSum = Number(number1) + Number(number2);

// Task 2: Determine if a Number is a Palindrome
let luckyInput = 12321;
let luckyInputStr = luckyInput.toString().split('').reverse().join('');
let luckyNumber;
if (parseFloat(luckyInputStr) === luckyInput) {
    luckyNumber = true
}
else {
    luckyNumber = false
}

// Task 3: Generate an Error Message for Invalid User Input
let userInput = "0"
let errorMessage;
if (userInput === null || userInput.length === 0) {
    errorMessage = "Required Field"
}
else if (userInput === "0"){
    errorMessage = "Must be a number besides 0"
}
else {
    errorMessage = ""
}
console.log(errorMessage)
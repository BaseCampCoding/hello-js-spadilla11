//Task 1: Determine if you need a driver’s license
let kind = "Car";
let needsLicenseResult;

if (kind === 'car' || kind === 'truck') {
    needsLicenseResult = true
} else {
    needsLicenseResult = false
}

//Task 2: Choose between two potential vehicles to buy
let option1 = "Honda";
let option2 = "Toyota";
let chooseVehicleResult;

if (option1 > option2) {
    chooseVehicleResult = option2 + " is clearly the better option"
} else {
    chooseVehicleResult = option1 + " is clearly the better option"
}
console.log(chooseVehicleResult)

//Task 3: Calculate an estimation for the price of a used vehicle
let originalPrice = 10000;
let age = 5;
let calculateRessellPriceResult;

if (age < 3) {
    calculateRessellPriceResult = originalPrice * 0.8;
} else if (age > 10) {
    calculateRessellPriceResult = originalPrice * 0.5;
} else if (age >= 3 && age < 10) {
    calculateRessellPriceResult = originalPrice * 0.70;
}
console.log(calculateRessellPriceResult)



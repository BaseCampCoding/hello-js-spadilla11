//Task 1: Determine if you need a driver’s license
let kind = "Car";
let needsLicenseResult = true;

//Task 2: Choose between two potential vehicles to buy
let option1 = "Toyota";
let option2 = "Honda";

let chooseVehicleResult = " is clearly the better choise";

//Task 3: Calculate an estimation for the price of a used vehicle
let originalPrice = 10000;
let age = 5;
let calculateRessellPriceResult; if (age < 3) {
    originalPrice * 0.8
} else if (age > 10) {
    originalPrice * 0.5
} else if (age >= 3 && age < 10) {
    originalPrice * 0.70
}


console.log(calculateRessellPriceResult)

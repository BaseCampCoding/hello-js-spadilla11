let knightIsAwake = false;
let archerIsAwake = true;
let prisonerIsAwake = true;
let petDogIsPresent = false;

//Fast Attack AAvailable
    //one way of doing it
let canExecuteFastAttack = !knightIsAwake;
console.log("Fast attack: " + canExecuteFastAttack)
    //with an if statement
if (knightIsAwake == false){
    canExecuteFastAttack = true
} else {
    canExecuteFastAttack = false
}
console.log("Fast attack: " + canExecuteFastAttack)

//Spy AAvailable
let canSpy = knightIsAwake || archerIsAwake || prisonerIsAwake;
console.log('Spy: ' + canSpy)

//Signal Prisoner AAvailable
let canSignalPrisoner = prisonerIsAwake && !archerIsAwake;
console.log( "Signal Prisioner: " + canSignalPrisoner)

//Free Prisoner AAvailable
let canFreePrisoner = (petDogIsPresent && !archerIsAwake) || !petDogIsPresent && prisonerIsAwake && !knightIsAwake && !archerIsAwake ;
console.log( "Free prisioner: " + canFreePrisoner)

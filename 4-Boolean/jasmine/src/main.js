let knightIsAwake = true;
let archerIsAwake = false;
let prisonerIsAwake = true;
let petDogIsPresent = true;

//Fast Attack AAvailable
let canExecuteFastAttack = !knightIsAwake;

//Spy AAvailable
let canSpy = knightIsAwake || !archerIsAwake || prisonerIsAwake;

//Signal Prisoner AAvailable
let canSignalPrisoner = prisonerIsAwake && archerIsAwake;

//Free Prisoner AAvailable
let canFreePrisoner = petDogIsPresent && !archerIsAwake || !petDogIsPresent && prisonerIsAwake && !knightIsAwake && archerIsAwake ;


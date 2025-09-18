//Task 1: Determine How Long It Takes to Mix a Juice
let juiceName = "Energizer"
let timeToMixJuiceResult;

if (juiceName === "Pure Strawberry Joy" ) {
    timeToMixJuiceResult = 0.5;}
else if (juiceName === "Energizer" || juiceName === "Green Garden") {
    timeToMixJuiceResult = 1.5;}
else if (juiceName === "Tropical Island"){
    timeToMixJuiceResult = 3;}
else if (juiceName === "All or Nothing"){
    timeToMixJuiceResult = 5;}
else {timeToMixJuiceResult = 2.5;}

//Task 2: Replenish the Lime Wedge Supply
let wedgesNeeded = 100;
let limes = ["small", "large", "medium", "large", "small"];
let wedgesCut = 0;
let limesCut
let i = 0

while (wedgesCut < wedgesNeeded && i < limes.length ) {
    
    if (limes[i] === "small") {
        wedgesCut += 6;
    }
    else if (limes[i] === "medium") {
        wedgesCut += 8;
    } 
    else if (limes[i] === "large") {
        wedgesCut += 10;
    }
    limesCut++;
    i++
}
// console.log(wedgesCut)

// Task 3: Finish Up the Shift
let timeLeft = 5
let orders = ["Energizer","Pure Strawberry Joy","Tropical Island","All or Nothing"]
let totalTime = 0
let orderTrack = []
let index = 0

for (let i = 0; i < orders.length; i++){
    let juice = orders[i]
    
    if (juice === "Pure Strawberry Joy" ) {
        timeToMixJuiceResult = 0.5;}

    else if (juice === "Energizer" || juiceName === "Green Garden") {
        timeToMixJuiceResult = 1.5;}

    else if (juice === "Tropical Island"){
        timeToMixJuiceResult = 3;}

    else if (juice === "All or Nothing"){
        timeToMixJuiceResult = 5;}
        
    else {timeToMixJuiceResult = 2.5;}
    orderTrack.push(juice)
    totalTime += timeToMixJuiceResult
}

while (totalTime < timeLeft && index < orderTrack) {
    
}

 
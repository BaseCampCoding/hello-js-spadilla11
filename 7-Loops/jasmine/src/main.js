//Task 1: Determine the Total Number of Birds Counted So Far
let birdsPerDay = [5,2,6,7,9,10,20]
let total = 0

for (let i = 0; i < birdsPerDay.length; i++) {
    total += birdsPerDay[i]
}

//Task 2: Calculate the Number of Visiting Birds in a Specific Week
let week = 1;
let daysPerWeek = 7;
let weekStart = (week -1) * daysPerWeek;
let weekEnd = week * daysPerWeek
let weekTotal = 0

for (let i = weekStart; i < weekEnd && i < birdsPerDay.length; i++){
    weekTotal += birdsPerDay[i]
}
console.log(weekTotal)

//Task 3: Fix a Counting Mistake
for (let i =0; i < birdsPerDay.length; i+=2){
    birdsPerDay[i] += 1
}
console.log(birdsPerDay)

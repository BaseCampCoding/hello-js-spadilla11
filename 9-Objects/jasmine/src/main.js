//Task 1: Create a New High Score Board
const scoreBoard = {
    "The Best Ever" : 1000000
};

//Task 2: Add Players to the Score Board
let newPlayerName = "Dani";
let newPlayerScore = 67;
scoreBoard[newPlayerName] = newPlayerScore;
console.log(scoreBoard)

//Task 3: Remove Players from the Score Board
let playerToRemove = "Dani";
delete scoreBoard[playerToRemove];
console.log(scoreBoard)


//Task 4: Increase a Player's Score
newPlayerName = "Ayla"
newPlayerScore = 90
let playerNameToUpdate = newPlayerName
let scoreToAdd = 111
scoreBoard[newPlayerName] = newPlayerScore + scoreToAdd
console.log(scoreBoard)

//Task 5: Apply Monday Bonus Points
let mondayBonus = 100
for (let key in scoreBoard){
    scoreBoard[key] += mondayBonus
}
console.log(scoreBoard)
const { version } = require("react");

//Task 1: Create a New Visitor
let visitorName = "Dani";
let visitorAge = "20";
let visitorTicketId = 1114;

const visitor = {
    name: visitorName,
    age: visitorAge,
    ticketId: visitorTicketId
};

//Task 2: Revoke the Ticket
visitor.ticketId = null;
console.log(visitor)

//Task 3: Determine the Ticket Status
const tickets = {
    1114: "Dani",
    1115: null,
    1116: null,
    1117: null
};

let ticketIdToCheck = 1114
let ticketStatusResult;

if (!(ticketIdToCheck in tickets)) {
    ticketStatusResult = "Ticket Status: unknown ticket id"
}
else if (tickets[ticketIdToCheck] === null) {
    ticketStatusResult = "Ticket Status: not sold"
}
else {
   ticketStatusResult = `Ticket Status: sold to ${tickets[ticketIdToCheck]}`
}
console.log(ticketStatusResult)

//Task 4: Improve the Ticket Status Response
let simpleTicketStatusResult;
if (!(tickets[ticketIdToCheck] === null)) {
    simpleTicketStatusResult = `${tickets[ticketIdToCheck]}`
}
else {
    simpleTicketStatusResult = "invalid ticket !!!"
}

console.log(simpleTicketStatusResult)

//Task 5: Determine the Version of Terms and Conditions
const visitorWithGtc = {
    gtc:{
        version: 1.0
    }
}

let gtcVersion;
if (gtc in visitorWithGtc){
    gtcVersion = gtc
} 
else {
    gtcVersion = null
}
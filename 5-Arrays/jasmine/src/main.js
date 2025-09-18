//Task 1: Retrieve a Card from the Stack
let stack = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let position = 5;
let getItemResult = stack[position];

//Task 2:Exchange a Card in the Stack
position = 6;
let replacementCard = 17;
stack[position] = replacementCard;
// console.log(stack[6])

//Task 3: Insert a Card at the Top of the Stack
let newCardTop = 25;
stack.unshift(newCardTop);
// console.log(stack)

//Task 4: Remove a car from the stack
position = 8;
stack.splice(position, 1);
// console.log(stack)

//Task 5: Remove the Top Card from the Stack
        //built in method the removes anything at the index of zero
stack.shift(); 
// console.log(stack)

//Task 6: Insert a Card at the Bottom of the Stack
let newCardBottom = 18;
stack.push(newCardBottom);
// console.log(stack)

//Task 7: Remove a Card from the Bottom of the Stack
        ///.pop() removes anything at the end of the array aka ist
stack.pop();
// console.log(stack)

//Task 8: Check the Size of the Stack
let stackSize = 9;
let checkSizeOfStackResult;

if (stackSize == stack.length) {
    checkSizeOfStackResult = true 
} else {
    checkSizeOfStackResult = false
}

// let checkSizeOfStackResult = stackSize === stack.length;
// console.log(checkSizeOfStackResult)

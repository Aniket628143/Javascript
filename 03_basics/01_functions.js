function sayMyName(){
    console.log("A");
    console.log("N");
    console.log("I");
    console.log("K");
    console.log("E");
    console.log("T");   
}

// sayMyName()

// function addTwoNumbers(number1, number2){
//     console.log(number1 + number2)
// }

function addTwoNumbers(number1, number2){
    // let result = number1 + number2
    // return result 

    return number1 + number2
}

const result = addTwoNumbers(3, 5)
// console.log("Result: ", result);


function userLoggedInMessage(username){
    return `${username} just logged in`
}

// console.log(userLoggedInMessage("Aniket"));


function loginUserMessage(username = "suresh"){
    if(!username){
        console.log("Please enter username");
        return
    }

    return `${username} just logged in`
}

// console.log(loginUserMessage("Aniket"))
// console.log(loginUserMessage());

// function calculateCartItems(...num1){
//     return num1
// }

function calculateCartItems(val1, val2, ...num1){
    return num1
}

// console.log(calculateCartItems(200, 300, 400, 500, 2000));


const user = {
    username : "aniket",
    price : 199
}

function handleObject(anyuser){
    console.log( `username is ${anyuser.username} and price is ${anyuser.price}`);
    
}

// handleObject(user)
handleObject({
    username: "sam",
    price: 399
})

myNewArray = [100, 200, 600, 700, 500]

function returnSecondElement(getArray){
    return getArray[1]
}

// console.log(returnSecondElement(myNewArray));
console.log(returnSecondElement([200, 300, 100, 500]));


// Primitive

// 7 types: Strings, Numbers, Boolean, null, undefined, Symbol, BigInt

const score = 100
const anotherScore = 100.30

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol("123")
const anotherId = Symbol("123")

console.log(id === anotherId);


// Reference (Non Primitive)

// Arrays, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"]

let myObj = {
    name : "Aniket",
    age : 20
}


const myFunction = function(){
    console.log("Hello World!");
    
}

/*
Return type of variables in JavaScript
1) Primitive Datatypes
       Number => number
       String  => string
       Boolean  => boolean
       null  => object
       undefined  =>  undefined
       Symbol  =>  symbol
       BigInt  =>  bigint

2) Non-primitive Datatypes
       Arrays  =>  object
       Function  =>  function
       Object  =>  object

*/


// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
 
// Stack (Primitive),  Heap (Non-Primitive)

let myyoutubename = "AniketShinde"

let anotherName = myyoutubename
anotherName = "PritamShinde"

// console.log(myyoutubename);
// console.log(anotherName);

let userOne = {
    email : "user@google.com",
    upiId : 'user@ybl'
}

let userTwo = userOne

userTwo.email = "aniket@google.com"

console.log(userOne.email);
console.log(userTwo.email);

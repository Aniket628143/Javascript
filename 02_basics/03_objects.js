// singleton
// object.create

// object literals

const mySym = Symbol("key1")

let myUser = {
    name: "Aniket",
    "full name":"Aniket Shinde",
    [mySym] : "mykey1",
    age: 20,
    location: "Nagpur",
    email: "aniket@google.com",
    isLoggedIn: false,
    lastLoggedInDays: ["Monday", "Saturday"]
}

// console.log(myUser.email);
// console.log(myUser["email"]);
// console.log(myUser["full name"]);
// console.log(myUser[mySym]);


myUser.email = "aniket@proton.me"
// Object.freeze(myUser)
// myUser.email = "aniket@microsoft.com"
// console.log(myUser);

myUser.greeting = function(){
    console.log("Hello JS User");
    
}

myUser.greetingTWo = function(){
    console.log(`Hello JS User, ${this.name}`);
}

console.log(myUser.greeting());
console.log(myUser.greetingTWo());

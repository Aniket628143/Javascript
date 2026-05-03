const user = {
    username: "hitesh",
    price: 199,

    welcomeMessage: function(){
        console.log(`${this.username}, weolcome to the website`);
        console.log(this);
        
    }

}

// user.welcomeMessage()
// user.username = "Suresh"
// user.welcomeMessage()

// console.log(this);


// function chai(){
//     let username = "Aniket"
//     console.log(this.username);
    
// }
// chai()

// const chai = function(){
//     let username = "Aniket"
//     console.log(this.username);
// }
// chai()

const chai = () => {
    let username = "Aniket"
    console.log(this);
    
}
// chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2) => num1 + num2
// const addTwo = (num1, num2) => (num1 + num2)    // very usefull in reactJS
const addTwo = (num1, num2) => ({username: "Aniket"})  


console.log(addTwo(3, 4))

// myArray = [2, 3, 4, 5, 6]
// myArray.forEach()
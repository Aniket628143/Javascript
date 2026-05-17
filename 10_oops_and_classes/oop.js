const user = {
    username: 'Aniket',
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        console.log(`${this.username}`)
    }
}

// console.log(user.username)
// console.log(user.getUserDetails())
// console.log(this);

function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    this.greetings = function(){
        console.log(`hello ${this.username}`);
        
    }
    
    return this
}

const userOne = new User('Aniket', 20, true)
const usertwo = new User('ChaiAurCode', 10, false)
console.log(userOne);
console.log(usertwo);

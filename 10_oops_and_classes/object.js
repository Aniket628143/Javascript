function multyplyby5(num){
    return num*5
}

multyplyby5.power = 2

console.log(multyplyby5(5));
console.log(multyplyby5.power);
console.log(multyplyby5.prototype);


function createUser(username, score){
    this.username = username
    this.score = score
}

createUser.prototype.increament = function(){
    this.score++
}

createUser.prototype.printMe = function(){
    console.log(`price is ${this.score}`);    
}

const chai = new createUser('chai', 25)
const tea = new createUser('tea', 250)

chai.printMe()
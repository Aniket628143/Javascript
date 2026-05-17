class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        return `USERNAME is ${this.username}`
    }
}

class Teacher extends User {
    constructor(username, email, password){
        super(username)
        this.email = email;
        this.password = password
    }

    addCourses(){
        console.log(`this course was added by ${this.username}`);
        
    }
}

const chai = new Teacher('chai', 'chai@teacher.com', '123')
chai.addCourses()
console.log(chai.logMe())

const masalaChai = new User('masala chai')
console.log(masalaChai.logMe())

console.log(chai instanceof Teacher);
console.log(chai instanceof User);

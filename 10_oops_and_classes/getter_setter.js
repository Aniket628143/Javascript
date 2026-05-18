class User {
    constructor(email, password){
        this.email = email;
        this.password = password
    }

    get email(){
        return this._email.toUpperCase()
    }

    set email(value){
        this._email = value
    }

    get password(){
        return `${this._password}aniket`
    }

    set password(value){
        this._password = value
    }
}

const aniket = new User('a@aniket.ai', 'abc')
console.log(aniket.password);
console.log(aniket.email)
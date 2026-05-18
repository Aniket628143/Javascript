const User = {
    _email: 'a@an.com',
    _password: 'abc',

    get email(){
        return this._email
    },

    set email(value){
        this._email = value
    },

    get password(){
        return `${this._password}hello`
    },
    
    set password(value){
        this._password = value
    }
}

const tea = Object.create(User)
console.log(tea.email);

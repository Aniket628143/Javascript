let myHeros = ['thor', 'spiderman']

let heroPower = {
    thor: 'hammer',
    spiderman: 'sling',

    getsuperpower: function(){
        console.log(`spidy ha s power ${this.spiderman}`);
        
    }
}

Object.prototype.aniket = function(){
    console.log(`aniket is present everywhere`);
    
}

Array.prototype.heyAniket = function(){
    console.log('aniket says hello');
    
}

// heroPower.aniket()
// myHeros.aniket()

// myHeros.heyAniket()
// heroPower.heyAniket()


// inheritance

const User = {
    name: 'chai',
    email: 'chai.google.com'
}

const Teacher = {
    makeVideos: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'Js asignment',
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User

// modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher)


let userName  = 'ChaiAurCode     '

String.prototype.trueLength = function(){
    console.log(this);
    console.log(`true length is: ${this.trim().length}`);
}

userName.trueLength()
'aniket'.trueLength()
'icetea'.trueLength()
// const tinderUser = new Object()

const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "some@google.com",
    fullname: {
        userfullname:{
            firstname: "Aniket",
            lastname : "Shinde"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1 : "a", 2 : "b"}
const obj2 = {3 : "a", 4 : "b"}
const obj3 = {5 : "a", 6 : "b"}

// const obj4 = {obj1, obj2}
// const obj4 = Object.assign({}, obj1, obj2, obj3)

const obj4 = {...obj1, ...obj2, ...obj3}
// console.log(obj4);

let users = [
    {
        id : 1,
        email : "a@gmail.com"
    },
    {
        id : 2,
        email : "b@gmail.com"
    },
    {
        id : 3,
        email : "c@gmail.com"
    }
]

// console.log(users[0].email);

console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty("isLoggedIn"));

const course = {
    courseName : "JS In Hindi",
    price : "999",
    courseInstructor : "Hitesh"
}

// console.log(course.courseInstructor);

// const {courseInstructor} = course     // Object de-structuring
const {courseInstructor: instructor} = course     // Object de-structuring

// console.log(courseInstructor);
console.log(instructor);


// {
//     "name":"aniket",
//     "email"; "a@gmail.com",
//     "password": "1234567890qwertyuiop"   
// }

// [
//     {},
//     {},
//     {}
// ]
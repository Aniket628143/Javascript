// Dates

let myDate = new Date()
// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleString());
// console.log(myDate.toLocaleDateString());


// let newCreatedDate = new Date(2026, 0, 23)
// let newCreatedDate = new Date(2026, 0, 23, 6, 9)
// let newCreatedDate = new Date("2026-01-14")
let newCreatedDate = new Date("01-14-2026")

// console.log(newCreatedDate.toLocaleString());


let myTimeStamp = Date.now()

// console.log(myTimeStamp);
// console.log(newCreatedDate.getTime());
// console.log(Math.floor(Date.now() / 1000));

let newDate = new Date()

console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());


newDate.toLocaleString('default', {
    weekday: "long"
    
})

const name = "Aniket"
const repoCount = 20

// console.log(name + repoCount + " Values");

// String Interpolation or (formatted string like python)
// console.log(`My name is ${name} and my repo count is ${repoCount}`);

const gameName = new String("Aniket-SS-com")

// console.log(gameName[0]);
// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());

// console.log(gameName.charAt(2));
// console.log(gameName.indexOf("i"));

const newString  = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-8, 4)
console.log(anotherString);

const newStringOne = "   Aniket    "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://aniket.com/aniket%20shinde"

console.log(url.replace("%20", "-"));

console.log(url.includes("sundar"));

console.log(gameName.split("-"));

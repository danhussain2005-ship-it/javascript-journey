console.log("Hello!");
console.log("This is a basic JavaScript file.");

// Variables
const accountId = 123456
var accountPassword = "DAN12345"
let accountEmail = "Dan@gmail.com";
accountCity = "Siliguri"
let accountState 
accountEmail = "Hussain@gmail.com"
//accountId = 654321 can't change a variable which we declare as const 
accountCity = "Kolkata"
accountPassword = "dan13245"
/*
Don't prefer using var, 
because of issue in block scope and fuctional scope 
*/
//console.table([accountId, accountEmail, accountPassword, accountCity, accountState]) //undefined = empty varaiable  


//Datatypes
let name = "Danish"
let age = 20
let isLoggedIn = true
// Types of Data types:
// (number = 2 to power 53), bigint, (string = ""), (null = standalone value), underfiend, (symbol = unique), object
console.log(typeof null) // object
console.log(typeof(name)); // string



//Convertion operation
let score = "33"
console.log(typeof score) //string
score = "33abc"
let valueInNumber = Number(score)
console.log (typeof valueInNumber) // Nan = Not a Number 
// "33" = 33
// "33abc" = NaN
// true = 1, false = 0
isLoggedIn = 0
let BooleanisLoggedIn = Boolean(isLoggedIn)
console.log(BooleanisLoggedIn)
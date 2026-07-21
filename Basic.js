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
console.table([accountId, accountEmail, accountPassword, accountCity, accountState]) //undefined = empty varaiable  


//Datatypes
let name = "Danish"
let age = 20
let isLoggedIn = true
// Types of Data types:
// (number = 2 to power 53), bigint, (string = ""), (null = standalone value), underfiend, (symbol = unique), object
console.log(typeof null) // object
console.log(typeof(name)); // string
const id = Symbol('123')
console.log(id)


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


//Strings
const namee = "dan"
const repoCount = 50
console.log(`My name is ${namee} and my repo count is ${repoCount}`)
const gameName = String("CallOfDuty")
console.log(namee[0])
console.log(gameName.length)
console.log(gameName.toUpperCase())
const newString = gameName.substring(0,4)
console.log(newString)
const anotherString = gameName.slice(5,8)
console.log(anotherString)
console.log(gameName.at(-1))
const newStringone = "    DAN    "
console.log(newStringone.trim())
const url = "https://dan.com/dan%20hussain"
console.log(url)
console.log(url.replace("%20","_"))
console.log(url.includes("dan"))
const a = "dan-hussain-2005"
console.log(a.split("-"))


//Numbers 
const point = 400
console.log(400)
const balance = new Number(100)
console.log(balance)
console.log(balance.valueOf())
console.log(balance.toString().length)
console.log(balance.toFixed(2))
const othernum = 123.4944
console.log(othernum.toPrecision(5),othernum.toPrecision(2),othernum.toPrecision(3))
const hundreds = 10000000
console.log(hundreds.toLocaleString())
console.log(hundreds.toLocaleString('en-IN'))


//Maths
console.log(Math)
console.log(Object.getOwnPropertyNames(Math))
console.log(Math.PI)
console.log(Math.abs(-568))
console.log(Math.round(5.9))
console.log(Math.ceil(4.4))
console.log(Math.floor(4.9))
console.log(Math.max(4,2,1,5,4,6,8,9))
console.log(Math.min(8,5,1,2,3,6,9))


//Date
let newDate = new Date()
console.log(newDate)
console.log(newDate.toString())
console.log(newDate.toLocaleDateString())
console.log(newDate.toDateString())
console.log(newDate.getMonth()+1) // stars with zero
console.log(newDate.getDate())
console.log(newDate.getDay())
let mydate = new Date(2026,6,5)
console.log(mydate.toDateString())
let myTimeStamp = Date.now()
newDate.toLocaleString('default', {
    weekday: "long"
})


//Array
const myArr = [0,2,5,3,4]
console.log(myArr[2])
const myArr2 = new Array(1,2,3,4)
//Array Methods
myArr.push(8)
console.log(myArr)
let k = myArr.pop()
console.log(myArr)
console.log(k)
myArr.unshift(10)
myArr.shift()
console.log(myArr)
const Myarr=[1,2,3,4,5,6,7]
console.log(Myarr.slice(1,3)) 
console.log(Myarr.splice(1,3))

//Array_02
const marvel_heroes = ["thor","ironman","spiderman"]
marvel_heroes.push("Deadpool")
const dc_heroes = ["batman","superman","flash"]
//console.log(marvel_heroes)
//marvel_heroes.push(dc_heroes)
//console.log(marvel_heroes[4][1])
const allheroes = marvel_heroes.concat(dc_heroes)
console.log(allheroes)
const new_heroes = [...marvel_heroes, ...dc_heroes]
console.log(new_heroes)
const num_array = [1,2,3,[4,5,6,[8,9]],5]
const real_num_array = num_array.flat(Infinity)
console.log(real_num_array)
console.log(Array.from("DAN"))
let score1=100,score2=300,score3=200
console.log(Array.of(score1,score2,score3))


//Objects
const JsUSER={
    name: "DANISH",
    age:20,
    location:"SILIGURI",
    gmail:"dan@gmail.com",
    isLoggedIn_=false
}
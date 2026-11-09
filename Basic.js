// Hello!
// This is a my JavaScript-Journey code file

// Variables
const accountId = 123456
var accountPassword = "DAN12345"
let accountEmail = "Dan@gmail.com"
let accountCity = "Siliguri"
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
const mySym = Symbol('Key1')
const JsUSER={
    name: "DAN",
    age:20,
    location:"SILIGURI",
    gmail:"dan@gmail.com",
    isLoggedin:false,
    [mySym]:'myKey1'
}
JsUSER.gmail="dan@google.com"
//Object.freeze(JsUSER)
JsUSER.gmail="dan@chatgpt.com"
console.log(JsUSER.gmail)
JsUSER.greeting = function(){
    console.log("Hello JS user")
}
console.log(JsUSER.greeting())
JsUSER.greetingTwo= function(){
    console.log(`Hey ${this.name}`)
}
console.log(JsUSER.greetingTwo())
console.log(JsUSER)

const GithubUser = {}

GithubUser.id = "dan132"
GithubUser.name = "Dan"
GithubUser.isLoggedIn = true
 console.log (GithubUser)

const regularUser ={
    email : "regular@gmail.com",
    fullname: {
        userfullname: {
            firstname:"Dan",
            lastname: "hussain"
    }
}
}
console.log(regularUser.fullname.userfullname.lastname)

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
//const obj3 = Object.assign({},obj1,obj2)
//console.log(obj3)
const obj3 = {...obj1,...obj2}
console.log(obj3)
console.log(Object.keys(GithubUser))
console.log(Object.values(GithubUser))
console.log(Object.entries(GithubUser))     

const course ={
    coursname:"JavaScript-Journey",
    courseprice:"1000",
    courseInstructor:"Dan"        
}

const {courseInstructor: instructor} = course
//console.log(courseInstructor)
console.log(instructor)


//Functions
function saymyname(){
console.log("D")
console.log("A")
console.log("N")
}
saymyname()
function add(num1,num2){
let result = num1+num2
return result
}

const result = add(5,3)
console.log("Result:",result)

function loginUserMessage(username){
    return `${username} just looged in`
}
console.log(loginUserMessage("DAN"))
function calc(val1,...num1){
    return num1
}
console.log(calc(500,200,400))

const user={
    username: "Dan",
    price:299    
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`)
}

handleObject(user)

const myNewArray=[200,400,500] 

function returnSecondValue(myNewArray){
    return myNewArray[1]
}
console.log(returnSecondValue(myNewArray))


//Scope 
let abc = 300
if (true){
    let abc = 100
}
console.log(abc)

function one(){
    const username = "dan"

    function two(){
        const website ="github"
        console.log(username)
    }
    // console.log(website)

    two()
}
one()

const userr ={
    username: "dan",
    price: 500,
    welcome: function(){
        console.log(this)
    }
}
userr.welcome();
userr.username = "sam";
userr.welcome();


console.log(this)
 const eye = () => {
    let username = "dan"
    console.log(this.username)
 }
 eye()

//Arrow
const addTwo = (num1,num2) => num1 + num2
console.log(addTwo(6,7));


//IIFE
(function ace(){//named IIFE
    console.log(`DB connected`);
})();


((name) => {//simple IIFE
    console.log(`DB connected two ${name}`)
})("dan");

 
//Control Statements 
if (true){
    console.log("DAN")
}

const score4= 500
if (score4<100){
    console.log("SCore is more than 100");
    }   
else if (score4>400){
    console.log("Score is  more than 400")
}

//Switch
const month= 3
switch(month){
    case 1:
        console.log("January")
        break
     case 2:
        console.log("Feb")
        break
    case 3: 
        console.log("March")
}

//Truthy Values: "0",true,"false",[],{},fuction
//Falsy values: false,0,-0,0n,"",null,undefined

usergmail=[]
if (usergmail.length===0)
{
    console.log("Array is empty")
}

const emptyObj={
    username:"Dan",

}
if(Object.keys(emptyObj).length===0){
   console.log("Object is empty")
}
else{
    console.log("Obejct is not empty")
}

let val1;
// val1=5??10
// val1=null?10
val1=undefined??15
console.log(val1)

//Terniary Operator -> condition ? true :false
const iceTeaprice = 150
iceTeaprice >= 100 ? console.log("More than 100") : console.log("Less than 100")

//Iterations

//1.For loop
for (let i = 10; i > 0; i--) {
    const element = i;
    console.log(i)    
}

for (let i=1;i<=10;i++){
    console.log(`${i}'s table`)
    for(let j=1;j<=10;j++){
        console.log(i + "x" + j + "=" + i*j)
    }

}

let myArray = ['flash','batman','superman']
console.log(myArray.length)
for (let i =0;i<myArray.length;i++){
    console.log(myArray[i]) 
}

//break and continue

for (let index = 1; index < 21; index++) {
    if (index==5){
        console.log("5 Detected")
        break;
    }
    console.log(`Value of i is ${index}`)    
}

for (let index = 1; index < 21; index++) {
    if (index==5){
        console.log("5 Detected")
        continue;
    }
    console.log(`Value of i is ${index}`)    
}

//2.While loop
let index=0
while(index<=10){
    console.log(`Value of index is ${index}`);
    index=index+2
}

//3.Do-While loop
let points = 0
do{
    console.log(`Score is ${points}`)
    points++
}while(points<=10)


//High Order Array Loops

//i.For-of loop
const arr=[1,2,3,4,5]
for (const num of arr) {
    console.log(num)   
}

const greetings="Hello world!"
for (greet of greetings){
    console.log(`Each char is ${greet}`)
}


const map = new Map()
map.set("In","India")
map.set("Fr","France")
map.set("Ita","Italy")
map.set("Esp","Spain")

for(const [keys,value] of map){
    console.log(keys,"=", value)
}

//ii.For-in loop

myObject ={
    js:"JavaScript",
    py:"Python"
}
for (const keys in myObject){
    console.log(`${keys} is short for ${myObject[keys]}`)
}

const myhero = ["Flash","Batman","Spiderman"]
for(const element in myhero){
    console.log(myhero[element])
}


//iii.For-each loop
const coding = ["js","ruby","java","python","c++"]
// coding.forEach(function(item){
//     console.log(item)
//})

// function printItem(items){
//     console.log(items)
// }

// coding.forEach(printItem)


coding.forEach((items,index)=>{
    console.log(items,index)
})

const myCoding =[{
    languagename: "JavaScript",
    languagefilename:"JS"
},
{
    languagename:"Python",
    languagefilename:"py"
},
{
    languagename:"React",
    languagefilename:"R"
}] 

myCoding.forEach((item)=>{
    console.log(item.languagename)
})

//Filter MAp, Reduce

// const value2 = coding.forEach((item)=>{
//     //console.log(item)
//     return item
// })
// console.log(value2)

const nums=[1,2,3,4,5,6,7,8,9,10]
const Mynum = nums.filter((item)=> item > 4)
console.log(Mynum)

const books =  [
  { title: 'Book One',   genre: 'Fiction',     publish: 1981, edition: 2004 },
  { title: 'Book Two',   genre: 'Non-Fiction', publish: 1992, edition: 2008 },
  { title: 'Book Three', genre: 'History',     publish: 1999, edition: 2007 },
  { title: 'Book Four',  genre: 'Non-Fiction', publish: 1989, edition: 2010 },
  { title: 'Book Five',  genre: 'Science',     publish: 2009, edition: 2014 },
  { title: 'Book Six',   genre: 'Fiction',     publish: 1987, edition: 2010 },
  { title: 'Book Seven', genre: 'History',     publish: 1986, edition: 1996 }]

// const userbook = books.filter((bk)=>bk.genre==="Fiction")
const userbooks = books.filter((bk)=>bk.publish<2000)
console.log(userbooks)
function sayHello(){
    return 'Hello World'
}

//a function that takes a function as an arguement
function greet(callback){
    console.log(callback())
}

greet(sayHello)

//This a higher order function
function callablefn(){
    return function(){
        console.log('The inner function message')
    }
}

//calling the function that returns a function
const fn = callablefn()
const message = fn()

let numbers = [1,5,6,7,9,8,7,74]

//Examples of higher order functions we use everyday
//map is a higher order function that takes in a callback function as an aruguement and modifies the arr
const newArr = numbers.map((number)=>{
    return number *2
})
console.log(newArr)

//settime out is another higher order function that takes a callback function and an interger as its arguements


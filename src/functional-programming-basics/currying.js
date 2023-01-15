import {compose,pipe} from 'lodash/fp'

/*
curring allows us to convert a function that has n number of
arguements and returns one function that takes one arguement
 */

function add(a){
    return function(b){
        return a+b
    }
}

const addition = add(1)(5)

//CURRING IMPLEMENTATION

let input = " JaVasCriPt "

function trim(str){
    return str.trim()
}

function toLowerCase(str){
    return str.toLowerCase()
}

function wrap(type){
    return function(str){
        return `<${type}>${str}</${type}>`
    }
}

//const result = wrapInDiv(toLowerCase(trim(input)))
//const transform = compose(wrapInDiv,toLowerCase,trim)
const function_order_of_excution = pipe(trim,toLowerCase,wrap('span'))
const result = function_order_of_excution(input)
console.log(result)

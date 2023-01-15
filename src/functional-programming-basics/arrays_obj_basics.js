const numbers = [1,2,3]

//Adding to an array
//adding a number after tw0
const index = numbers.indexOf(2)
const added= [
    ...numbers.slice(0,index),
    4,
    ...numbers.slice(index)
]

//Removing an item from an array
const removed = numbers.filter(n=> n!==2)

//updating an array
const updated = numbers.map(n===2 ? 20:n)
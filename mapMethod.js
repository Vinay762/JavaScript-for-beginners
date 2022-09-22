//map method

const numbers = [2,4,6,8];

//pahle bahar bana dete hai

// const square = function(number){
//     return number * number;
// }

//isme return karna zaroori hota hai agar return nahi kara to 
//squareNumber me undefined store ho jayega

// const squareNumber = numbers.map((number, index) => {
//     return `index : ${index}, ${number * number}`;
// });

//realistic example

const users = [
    {firstName : "Vinay", age : 24},
    {firstName : "Tiwar", age : 22},
    {firstName : "Ashish", age : 26},
    {firstName : "Ajit",  age : 28},
]

const ans = users.map((user) => {
    return user.firstName;
})

console.log(ans);
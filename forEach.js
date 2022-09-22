//important array methods

const numbers = [4,3,5,8];

// function multiplyBy2(number, index){
//     console.log("index is", index);
//     console.log(`${number}*2 = ${number * 2}`);
// }

// // for(let i = 0; i<numbers.length; i++){
// //     multiplyBy2(numbers[i], i);
// // }

// //for each {numbers[i], index}

// numbers.forEach(multiplyBy2)


//another way of doing this 

// numbers.forEach(function(number, index){
//     console.log("index is", index);
//     console.log(`${number}*2 = ${number * 2}`);
// })

// numbers.forEach(function(number){
//     console.log(number*2);
// })

const users = [
    {firstName : "Vinay", age : 22},
    {firstName : "Ashish", age : 22},
    {firstName : "Ajit", age : 22},
];

// users.forEach(function({firstName}){
//     console.log(firstName);
// })

users.forEach((user, index) => {
    console.log(user.firstName, index);
})














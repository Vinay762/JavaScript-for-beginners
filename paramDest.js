//param destructuring 

//object
//react.js

const person = {
    firstName : "Vinay",
    gender : "Male",
}

// function printDetails(obj){
//     console.log(obj.firstName);
//     console.log(obj.gender);
// }

function printDetails({firstName, gender}){
    console.log(firstName);
    console.log(gender);
}

printDetails(person);
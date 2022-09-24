// function hello(){
//     console.log("hello");
// }

//javascript me function function bhi hota hai 
//aur object bhi hota hai

//console.log(hello.name)

//you can add you own properties
// hello.myownProperty = "very unique value";
// console.log(hello.myownProperty);


//name property -> function ka naam batyengi
//function hamme call, apply and bind method bhi deta hai

//function hamme dete hai free space means empty object 
//us object ko bolte hai prototype


// console.log(hello.prototype); 
// //only functions provide prototype property

// if(hello.prototype){
//     console.log("prototype is present");
// }else{
//     console.log("prototype is not present");
// }

// hello.prototype.abc = "abc";
// hello.prototype.sing = function(){
//     return "singing";
// }
// console.log(hello.prototype);

// const userMethos = {
//     about : function(){
//         return `${this.firstName} is ${this.age} years old`;
//     },

//     is18 : function(){
//         return this.age >= 18;
//     },

//     sing : function(){
//         return "singing....";
//     }

// }

function createUser(firstName, lastName, email, age, address){
    const user = Object.create(createUser.prototype);
    user.firstName = firstName
    user.lastName = lastName
    user.email = email;
    user.age = age;
    user.address = address;
    return user;
}

createUser.prototype.about = function(){
    return `${this.firstName} is ${this.age} years old`;
}

createUser.prototype.is18 = function(){
    return this.age >= 18;
}

createUser.prototype.sing = function(){
    return "singing...";
}


const user1 = createUser("Vinay", "Tiwari", "vinaytiwari1501@gmail.com", 22, "Delhi");
console.log(user1.about());
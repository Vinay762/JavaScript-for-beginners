//create functins to create multiple objects;

const user = {
    firstName : "Vinay",
    lastName : "Tiwari",
    email : "vinaytiwari1501@gmail.com",
    age : 2,
    address : "B-42 Shiv Vihar Hastsal Uttam Nagar",
    about : function(){
        return `${this.firstName}, is ${this.age} year`
    },
    is18 : function(){
        return this.age >= 18;
    }
}

const aboutUser = user.about();
console.log(aboutUser);
//sochio mujhe aise 1 million user chahiye

//function(that function create object)
//add key-value pair
//object ko return karega


// function createUser(firstName, lastName, email, age, address){
//     const user = {};
//     user.firstName = firstName;
//     user.lastName = lastName,
//     user.email  = email,
//     user.age = age,
//     user.address = address,
//     user.about = function(){
//         return `${this.firstName}, is ${this.age} year`
//     }
//     user.is18 = function(){
//         return this.age >= 18
//     }
//     return user;
// }


// const user1 = createUser("Ashish", "Jha", "ashishJha12@gmail.com", 15, "Delhi");
// const user2 = createUser("Ashish", "Jha", "ashishJha12@gmail.com", 15, "Delhi");
// const user3 = createUser("Ashish", "Jha", "ashishJha12@gmail.com", 15, "Delhi");

// console.log(user1);
// console.log(user1.is18());

//iska matlab yahan jitne user banenege utne bar unke method banege
//jinka function sare users me same hi hai 
// to ye ek reduant data hai


// //iske upay
// const userMethods = {
//     about : function(){
//         return `${this.firstName} is ${this.age} is year old`;
//     },
//     is18 : function(){
//         return this.age >= 18;
//     }
// }


// function createUser(firstName, lastName, email, age, address){
//     const user = {};
//     user.firstName = firstName;
//     user.lastName = lastName,
//     user.email  = email,
//     user.age = age,
//     user.address = address,
//     user.about = userMethods.about;
//     user.is18 = userMethods.is18;
//     return user;
// }



// const user1 = createUser("Ashish", "Jha", "ashishJha12@gmail.com", 15, "Delhi");
// const user2 = createUser("Vinay", "Tiwari", "vinaytiwari1501@gmail.com", 22, "Delhi");
// console.log(user1);
// console.log(user1.about());
// console.log(user2.about());



// //isme bhi kuch problem hai
// //age har user k hazaro method hai to dono jagah hazaro method likhne
// //padenge


// const obj1 = {
//     key1 : "value1",
//     key2 : "value2",
// }

// // const obj2 = {
// //     key3 : "value3",
// // }

// const obj2 = Object.create(obj1); //return khali object


// console.log(obj2); // ye empty hai
// console.log(obj2.key1); //lekin yaha par value1 print ho rahi hai
// //jo ham chahte hai wo ho gaye 

// console.log(obj2.__proto__);

// //javascript ko jo chiz usek object me nahi milti hai to wo 
// //proto me check karti hai
// //object2 k case me proto obj1 hai

// //[[prototype]] __proto__ same hai
// //prototype alag ahi un dono se




// console.log(obj1.key1);
// //obj2.key1  
// //age object 2 k pass key1 na mile to wo obj1 k pass jaye
// //aur waha par jo key1 hai usko return karde







//ab purane problem par


const userMethods = {
    about : function(){
        return `${this.firstName} is ${this.age} is year old`;
    },
    is18 : function(){
        return this.age >= 18;
    }
}


function createUser(firstName, lastName, email, age, address){
    const user = Object.create(userMethods);
    user.firstName = firstName;
    user.lastName = lastName;
    user.email  = email;
    user.age = age;
    user.address = address;
    return user;
} 


const user1 = createUser("Vinay", "Tiwari", "vinaytiwari1501@gmail.com", 22, "Delhi");
console.log(user1);
console.log(user1.about());
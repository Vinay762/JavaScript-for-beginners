// function hello(){
//     console.log("Hello");
// }

// hello.call();

//call apply bind 

// const user1 = {
//     firstName : "Vinay",
//     age : 22,
//     about : function(hobby, favMusic){
//         console.log(this.firstName, this.age, hobby, favMusic);
//     }
// }

// const user2 = {
//     firstName : "Ashish", 
//     age : 9,
// }

//user1.about.call(); //undefined, undefined
//user1.about.call(user2); //Ashish , 9

//.call likhne ke bad this ki value batani padegi

//user1.about.call(user2,"guitar", "temp");

//user2 ko borrow karna hai about method;

//user1.about();


//another way

// function about(hobby, favMusic){
//     console.log(this.firstName, this.age, hobby, favMusic);
// }

// const user1 = {
//     firstName : "Vinay",
//     age : 22,
// }

// const user2 = {
//     firstName : "Ashish",
//     age : 9,
// }

// about.call(user1, "music", "temp");




//apply

//about.call(user1,["guitar", "temp"]);
//apply me bas array me pas karte hai


//Bind
//bind ek function return karta hai

// const func = about.bind(user1, "music", "hello");
// console.log(func);
// func();
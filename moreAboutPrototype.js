//let numbers = [1,2,3];
//prototype:- sirf function

// let numbers = new Array(1,2,3);
// console.log(Array.prototype);

console.log(Array.prototype);
//array ka prototype array hota hai jabki baaki ka prototype object
//hota hai



// console.log(numbers);


function hello(){
    console.log("hello");
}

console.log(hello.prototype)

//we can change protopye
hello.prototype = [];

console.log(hello.prototype);
//intro to arrays

//ordered collections of item

// let fruits = [ "apple", "mango", "grapes"];
// let numbers = [1,3,5,9];

// let mixed = [1,3,5,"apple", null, undefined];


// console.log(fruits);
// console.log(numbers);

// console.log(fruits[0]);

// console.log(mixed);


// console.log(fruits);

// fruits[1] = "banana";

// console.log(fruits);

// console.log(typeof(fruits));
// //all the reference type data types are object

// //reference type

// let obj = {}; //object literal

// console.log(Array.isArray(fruits));


let fruits = [ "apple", "mango", "grapes"];

//all the function on arrays 
// arrays push pop

// fruits.push("banana");

// console.log(fruits);

//pop also return the last element;

// console.log(fruits.pop()); //it also return the string 

// console.log(fruits);




//unshift  starting me add karta hai ye
fruits.unshift("banana");
console.log(fruits);


//shift starting se element ko remove karega

let removedFromBegin =  fruits.shift();
console.log(fruits);
console.log(removedFromBegin);
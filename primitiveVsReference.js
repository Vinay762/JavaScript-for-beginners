//primitive Vs Reference Data Types

// let num1 = 6;
// let num2 = num1;

// console.log("Value of num1 is", num1);
// console.log("Value of num2 is", num2);

// num1++;

// console.log("Value of num1 is", num1);
// console.log("Value of num2 is", num2);

//reference type (same as shallow copy & deep copy);

// let array1 = ["item1", "item2"];
// let array2 = array1;

// console.log("Array1", array1);
// console.log("Array2", array2);

// array1.push("item3");

// console.log("Array1", array1);
// console.log("Array2", array2)


//how to clone array ->  deep copy

// let array1 = ["item1", "item2"];

// let array2 = array1.slice(0);

//second tarika

// let array1 = ["item1", "item2"];

// let array2 = [].concat(array1);
// array1.push("item3");

// console.log(array1 === array2);
// console.log(array1);
// console.log(array2);


//spread operator -> 3rd tarika to copy the array
// let array1 = ["item1", "item2"];

// let array2 = [...array1];

// console.log(array1 === array2);
// console.log(array1);
// console.log(array2);



let array1 = ["item1", "item2"];

//let array2 = [...array1].concat(["item3", "item4"]);
let array2 = [...array1, "item3", "item4"];

console.log(array1);
console.log(array2);





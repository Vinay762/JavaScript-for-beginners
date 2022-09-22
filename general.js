//iterables
// jispe hum for of loop laga sakte hai
// string, array are iterable

// const firstName = "Vinay";

// for(let ch of firstName){
//     console.log(ch);
// }

//objects par for of loop nahi lag sakti hai

//array like object
//jinke pas length property hoti hai
//aur jinko hum index se acess kar sakte hai

//sets
//(it is iterable);
// store data
// sets also have its own methods
// no index-based acess
// order is not guarantedd
// unique items only (no duplicated allowed)

//const numbers = [1,2,3];
//const numbers = new Set([1,2,3]);

// numbers[2] => undefined //  no index based acess
// console.log(numbers);
// console.log(typeof(numbers))
// console.log(Array.isArray(numbers));



// const numbers = new Set();
// numbers.add(1);
// numbers.add(2);
// numbers.add(["item1", "item2"]);
// numbers.add(["item1", "item2"]);
// numbers.add("item2");

// if(numbers.has(1)){
//     console.log("1 is Present");
// }else{
//     console.log("1 is not Present");
// }

// //console.log(numbers);

// const myArray = [1,2,4,4,5,6,5,6];
// const uniqueEle = new Set(myArray);

// //uniqueEle.length is undefined
// let len = 0;

// for(let a of uniqueEle){
//     len++;
// }
// console.log(len);
// console.log(uniqueEle);
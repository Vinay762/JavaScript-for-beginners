// reduce 

//as a input ye ek callback function lega

// const numbers = [1,2,4,5,6];

// //aim :- sum of all the numbers in array

// //track accumulatro, currentValue

// const sum = numbers.reduce((accumulator, currentValue)=>{
//     return accumulator + currentValue;
// }, 100)

// console.log(sum);

// //accumulater   currentValue, return 
// // 1               2             3
// // dusri bar me accumulator ki value jo pahli bar me return ki value hai
// // 3               4             7
// // 7               5            12
// // 12              6            18


//real-life example

const userCart = [
    {productId : 1, productName : "Mobile", price : 12000},
    {productId : 2, productName : "Laptop", price : 1000},
    {productId : 3, productName : "Tv", price : 15000},
    {productId : 4, productName : "Books", price : 14000},
];

const sum = userCart.reduce((accumulater, currentProduct)=>{
    return currentProduct.price + accumulater;
}, 0);

// here 0 is the initial value of accumulator, and currentProduct 
// iterates over the userCart;

console.log(sum);

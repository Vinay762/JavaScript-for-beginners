//24 -> javascript khatam hoga
//26 -> React.js
//30 -> Dono Projects k Code chahiye mujhe

// sort 

// const numbers = [5,9, 1200, 400, 3000];
// //numbers.sort();

// //console.log(numbers); //javascript isko string samajh k sort 
// // kar raha hai [1200, 3000, 400, 5, 9] ye aayega


// // how to sort numbers
// // numbers.sort((a,b) => {
// //     return a-b;
// // })

// numbers.sort((a,b) => a-b);

// console.log(numbers);


//flipkart low to high;

const products = [
    {productId : 1, productName : "p1", price : 36},
    {productId : 2, productName : "p2", price : 12},
    {productId : 3, productName : "p3", price : 17},
]

const lowToHigh = products.slice(0).sort((product1, product2) => {
    return product1.price - product2.price;
})

console.log(lowToHigh);
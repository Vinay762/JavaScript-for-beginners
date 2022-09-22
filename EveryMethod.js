//every Method

// const numbers = [2,5,6,3,7];

// const ans = numbers.every((number) => number%2 === 0);

// console.log(ans);

// //callback function return true/false; 
// //every method --> true ya false return karega
// //agar sare true return karenge tabhi true karega warna false return
// //karega ye


const userCart = [
    {productId : 1, productName : "mobile", price : 12000},
    {productId : 2, productName : "laptop", price : 22000},
    {productId : 3, productName : "tv", price : 15000},
]

//we have to check whether each product price is less than 30,000

const ans = userCart.every((product) => {
    return product.price < 30000;
})

console.log(ans);
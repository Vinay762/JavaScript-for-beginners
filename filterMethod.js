//filter Method

const numbers = [1,2,3,4,5,6,7,8];

// const isEven = function(number){
//     return number%2 === 0;
// }

// const ans = numbers.filter(isEven);
// console.log(ans);

//filter hamesha ek boolean value return karega

const ans = numbers.filter((number) => {
    return number%2 === 0;
})

console.log(ans);
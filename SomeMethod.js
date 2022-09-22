//some method

const numbers = [3,5,8,9];

//kya ek bhi number aisa hai jo even hai

const ans = numbers.some((number) => {
    return number%2 === 0;
})

console.log(ans);
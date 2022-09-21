//arrow function

const singHappyBirthday = () => {
    console.log("Happy BirthDay to You .... ");
}

singHappyBirthday();

const isEven = (a) => {
    return a%2 === 0;
}

//agar single parameter hai to binar paranthesis k bhi kar sakte hai

//const isEven = a => a%2 === 0; //agar direct return hai to

console.log(isEven(14));

const sum = (a,b,c) => {
    return a + b + c;
}

console.log(sum(2,3,5));

//expression me se function keyword hata to aur () k baad => laga
//do


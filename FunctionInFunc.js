//functions inside functions

// const app = () => {
//     const myfunc = () => {
//         console.log("Hello from myFunc");
//     }

//     const addTwo = (num1, num2) => {
//         return num1 + num2;
//     }

//     const mul = (num1, num2) => num1 * num2;

//     console.log("Inside App");
//     myfunc();
//     console.log(addTwo(2,4));
// }

// app();


//lexical scope

function  myApp(){
    const myVar = "value1";
    function myFunc(){
        const myVar = "value59";
        console.log("inside myFunc", myVar);
    }
    const myfunc2 = function(){}
    const myfunc3 = () => {}
    console.log(myVar);
    myFunc();
}

myApp();


















//block scope vs function scope 

//let and const are block scope 
// and var is function scope

// {
//     let firstName = "harshit";
//     console.log(firstName);
// }



// {
//     let firstName = "Vinay";
//     console.log(firstName);
// }

// const firstName = "Ashish";
// console.log(firstName);

// {
//     var firstName = "Vinay";
// }

// {
//     var firstName = "Ashish";
// }

// console.log(firstName);

// if(true){
//     var firstName = "Vinay"
//     console.log(firstName);
// }

// console.log(firstName);

function myApp(){
    if(true){
        let firstName = "Vinay";
        console.log(firstName);
    }
    console.log(firstName);
}

myApp();
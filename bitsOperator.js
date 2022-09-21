// and or operator

// let firstName = "Harshit";
// let age = 15;

// if(firstName[0] === 'H' && age >= 18){
//     console.log("Yes");
// }else{
//     console.log("No");
// }

// and  && 
// or ||

//nested if else

//winning number 19;

let winningNumber = 19;
//let userGuess = prompt("Guess a Number");
//console.log(userGuess);

// iswale userGuess ka typeof string hota hai matlab string me input 
// le raha hai ye

let userGuess = +prompt("Guess a Number");

if(userGuess === winningNumber){
    console.log("You are Right");
}else if(userGuess < winningNumber){
    console.log("Too Less");
}else{
    console.log("Too High");
}
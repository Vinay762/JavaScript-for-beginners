//trim()
//toUpperCase()
//toLowerCase()
//slice();

let firstName = "  Vinay   ";

console.log(firstName);

console.log(firstName.length);

let newString = firstName.trim(); // a string return karta hai
// firstName = firstName.trim();

console.log(newString);

console.log(newString.length);


//trim spaces ko remove karta hai;


let lastName = "tiwari";
console.log(lastName.toUpperCase()); // ye bhi nayi string dega

lastName = lastName.toUpperCase();
console.log(lastName);

//jaise upper case hai waise hi lower case hoga same to same 
// wo bhi string type return me dega



//now slice Method

firstName = "Vinay";

//start Index
//end Index;
newString = firstName.slice(0,4);
console.log(newString);
//end index nahi deta hai ye

newString = firstName.slice(1,3);
console.log(newString);

newString = firstName.slice(1);
console.log(newString);
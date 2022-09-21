const key = "email";
const person = {
    name : "Vinay",
    age : 22,
    "person hobbies" : ["guitar", "sleeping", "listening Music"],
}

//you cannot acess person hobbies using the dot operator it can
// only be acessed by bracket operator
//console.log(person);
console.log(person["person hobbies"]);


//2)

person.key = "vinaytiwari1501@gmail.com";

console.log(person);

person[key] = "vinaytiwari1501@gmail.com";

console.log(person);
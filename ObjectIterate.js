const person = {
    name : "Vinay", 
    age : 22,
    "person hobbies" : ["guitar", "sleeping", "listening Music"],
}

//iteration in object
//for in loop
// Object.keys

// for(let key in  person){
//     //console.log(`${key} : ${person[key]}`);
//     console.log(key, ":", person[key]);
// }

// console.log(Object.keys(person));
// //Object.keys(person) return arrays of all keys
// console.log(Array.isArray(Object.keys(person)));

for(let key of Object.keys(person)){
    //console.log(key);
    console.log(person[key]);
}

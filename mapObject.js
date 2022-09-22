// maps
// map is an iterable

// store data in ordered fashion

//object literal
//key -> string 
//key -> symbol

// const person = new Map();

// person.set('firstName', 'Vinay'),
// person.set('age' , 4);
// person.set(1, "one");

// // console.log(person);

// // console.log(person.get('age'));
// // //console.log(person.keys());

// // for(let key of person.keys()){
// //     console.log(key);
// // }


// // person.set([1,2,4], "array");
// // console.log(person);

// for(let key of person){
//     console.log(Array.isArray(key));
// }



const person = new Map([['firstName', 'Vinay'], ['age', 88], [1 , "one"]]);
console.log(person);

const person1 = {
    id : 1,
    firstName : "Vinay",
}

const userInfo = new Map();
userInfo.set(person1, {age : 8, gender : "malel"});

console.log(userInfo);



console.log(userInfo.get(person1).gender);





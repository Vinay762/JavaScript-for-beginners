//spread operator
// const array1 = [1,2,3];
// const array2 = [4,5,6];

// const newArray = [...array1, ...array2];
// console.log(newArray);

// const newArray = [..."abc"];

//spread operator in case of objects

const obj1 = {
    key1 : "value1",
    key2 : "value2",
    //key1 : "value56", last wali value rahegi ye yaad rakhio overwrite
}

const obj2 = {
    key1 : "valueUnique",
    key3 : "value3",
    key4 : "value4",
}

//const newObject =  { ...obj1, ...obj2, key59 : "value59"};

const newObject = {..."abc"};

console.log(newObject);


























//fill method
//value start end;

// const myArray = new Array(10).fill(-1);
// console.log(myArray);

// const myArray = [1,2,3,4,5,6,7,8];

// myArray.fill(0,2,4);

// console.log(myArray);


//splice Method

//start delete insert

const myArray = ["item1", "item2", "item3", "item4"];

//delete  startIndex NumberofItemsToDelete
//delete also gives whatever you have deleted
//myArray.splice(1,1);

//insert start, noOfdeleted, what do you want to insert
//myArray.splice(1,0,"insertedItem");

//insert aur delete dono ek sath kaise karna hai
//it also returns the deleted item
myArray.splice(1,2,"insertedItem1", "insertedItem2");


console.log(myArray);
//objects inside array
//very useful in real world applications


const users = [
    {
        userId : 1,
        firstName : "Vinay",
        gender : "Male",
    },
    {
        userId : 2,
        firstName : "Ajit",
        gender : "Male",
    },
    {
        userId : 3,
        firstName : "Ashish",
        gender : "Male",
    }
];

console.log(users);

for(let user of users){
    console.log(user.firstName);
}
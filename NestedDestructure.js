//nested destructure

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

//const [user1, user2, user3] = users;

//console.log(user1);

const [{firstName : user1firstName}, , {userId}] = users;
console.log(user1firstName, userId);
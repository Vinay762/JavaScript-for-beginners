// const myArray = ["Hello", "catt", "dog", "lion"];

// //jaise hi pahla three length ka mila wahi se return ho jayega
// //s.length === 3
//  agar kuch nahi mila to undefined return ho jayega

// function isLength(s){
//     return s.length === 3;
// }

// const ans = myArray.find((s) => s.length === 3);
// console.log(ans);


const users = [
    {userId : 1, userName : "Vinay"},
    {userId : 2, userName : "Tiwari"},
    {userId : 3, userName : "Ashish"},
    {userId : 4, userName : "Jha"},
]

const ans = users.find((user) => {
    return user.userId === 3;
})

console.log(ans);

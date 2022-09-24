// const user1 = {
//     firstName : "Vinay", 
//     age : 22,
//     about : function(){
//         console.log(this.firstName, this.age);
//     }
// }


const user1 = {
    firstName : "Vinay",
    age : 22,
    //short syntax
    about(){
        console.log(this.firstName, this.age);
    }
}

user1.about();
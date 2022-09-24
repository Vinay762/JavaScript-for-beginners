//arrow function

const user1 = {
    firstName : "Vinay",
    age : 8,
    about : () => {
        //console.log(this); -> window
        console.log(this.firstName, this.age);
    }
}
//arrow function of this apne surrounding se lega
//arrow function ka this kabhi change bhi nahi kar sakte hai

//user1.about.call(user1); -> no effect at all


user1.about();
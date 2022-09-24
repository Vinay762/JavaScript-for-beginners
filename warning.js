const user1 = {
    firstName : "Vinay",
    age : 8,
    about : function(){
        console.log(this.firstName, this.age);
    }
}

const myFunc = user1.about.bind(user1);
myFunc(); //returns undefine, undefined  

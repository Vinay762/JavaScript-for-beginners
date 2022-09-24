//methods
//function inside object

//this 

const person = {
    firstName : "Vinay",
    age : 8,
    about : function(){
        console.log(`person name is ${this.firstName} and age is ${this.age}`);
    }
}

person.about();


//new keyword

function CreateUser(firstName,age){
    this.firstName = firstName;
    this.age = age;
}

CreateUser.prototype.about = function(){
    return `${this.firstName} is ${this.age} years old`;
}

//new keyword here does 3 things
//1) empty object this = {};
//2) return this
//3) Object.create(createUser.prototype) ye kaam bhi new word khud kardega
//new is constructor

const user1 = new CreateUser("Vinay", 6);
//console.log(user1);
console.log(user1.about());
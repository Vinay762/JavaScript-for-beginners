//classes are fake because jo kaam hamme class keyword
// ka use kar rahe honge same kaam interally ho raha hoga

//agar first letter capital hai matlab ye new se declare hoga

class CreatUser{
    constructor(firstName, lastName, email, age, address){
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.age = age;
        this.address = address
    }
    about(){
        return `${this.firstName} is ${this.age} years old`;
    }
    is18(){
        return this.age >= 18;
    }
    sing(){
        return "singing...";
    }
    func(a){
        console.log(a);
    }
}

const user1 = new CreatUser("Vinay", "Tiwar", "vinaytiwari1501@gmail.com", 22, "Delhi");
//console.log(user1);
//console.log(user1.about());
//console.log(Object.getPrototypeOf(user1));
//console.log(user1.func(12));
user1.func("Vinay");

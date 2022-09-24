//getters & setters
class Person{
    constructor(firsName, lastName, age){
        this.firsName = firsName;
        this.lastName = lastName;
        this.age = age;
    }
    get fullName(){
        return `${this.firsName} ${this.lastName}`;
    }
    set fullName(fullName){
        const [firstName, lastName] = fullName.split(" ");
        this.firsName = firstName;
        this.lastName = lastName;
    }
}

const person1 = new Person("Vinay", "Tiwari", 6);
console.log(person1.fullName); //ye ab ek property ban gaya get lagane se
//ab ye functioon nahi rahega


//suppose name change karna hai

//person1.setName("Ashish","Jha");
//another method 
//person1.firstName = firstName;
//person1.lastName = lastName;

person1.fullName = "Ashish Jha";
console.log(person1);
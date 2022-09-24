class Animal{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    eat(){
        return `${this.name} is eating`;
    }
    isSuperCute(){
        return this.age <= 1;
    }
    isCute(){
        return true;
    }
}

// const Animal1 = new Animal("Tom", 2);

// console.log(Animal1);
// console.log(Animal1.eat());


//dog class

// class Dog{
//     constructor(name, age){
//         this.name = name;
//         this.age = age;
//     }
//     eat(){
//         return `${this.name} is eating`;
//     }
//     isSuperCute(){
//         return this.age <= 1;
//     }
//     isCute(){
//         return true;
//     }
// }

// const tommy = new Dog("Tommy", 3);
// console.log(tommy);


//inheritance 
//dog is sub class Animal is the parent class
class Dog extends Animal{
    constructor(name, age, speed){
        super(name, age); //super keyword
        this.speed = speed;
    }
    eat(){
        return `modified eat`;
    }
    run(){
        return `${this.name} is running at ${this.speed}`;
    }
}

const tommy = new Dog("tommy", 2, 45);
console.log(tommy);
console.log(tommy.run());
console.log(tommy.eat());
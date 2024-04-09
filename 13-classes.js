class Animal{
    constructor(name,age){
        this.name = name;
        this.age = age
    }
    bark(){
        console.log(`${this.name} is barking and his age is ${this.age}`);
    }
    sleep(){
        console.log("ghbsdh");
    }
}

let dog = new Animal("Sohaib",43);
dog.bark()

// class student{
//     constructor(name){
//         this.name=name;
//     }
// }
// let obj=new student('zahid')
// console.log(obj.name);
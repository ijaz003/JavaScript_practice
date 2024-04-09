class Animal{
    constructor(name){
        this.name= name;
    }  
    
    color(){
        console.log(`${this.name} is having big hole`);
    }
}
class Animal1 extends Animal{}
class Animal2 extends Animal{
    color(){
        console.log(`${this.name} is having black and small hole`);
    }
}

let animal1 = new Animal1("Zahid")
let animal2 = new Animal2("Ijaz")
animal1.color();
animal2.color();
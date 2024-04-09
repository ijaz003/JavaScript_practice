class Animal {
    #age; // Private field
    _color; // Protected field

    constructor(name, age, color) {
        this.name = name; // Public field
        this.#age = age; // Private field can only be accessed within the class
        this._color = color; // Protected field can be accessed by subclasses
    }

    displayInfo() {
        console.log(`Name: ${this.name}, Age: ${this.#age}, Color: ${this._color}`);
    }
}

class Dog extends Animal {
    constructor(name, age, color, breed) {
        super(name, age, color);
        this.breed = breed; // Public field
    }

    displayInfo() {
        console.log(`Name: ${this.name}, Age: ${this.age}, Color: ${this._color}, Breed: ${this.breed}`);
    }
}

let animal = new Animal("Rex", 3, "Brown");
animal.displayInfo(); // Output: Name: Rex, Age: 3, Color: Brown

let dog = new Dog("Max", 2, "Black", "Labrador");
dog.displayInfo(); // Output: Name: Max, Age: 2, Color: Black, Breed: Labrador

console.log(animal.name); // Output: Rex
// console.log(animal.#age); // Error: Private field '#age' is not accessible outside class 'Animal'
// console.log(animal._color); // Error: Protected field '_color' is not accessible outside class 'Animal'
// console.log(dog.breed); // Output: Labrador

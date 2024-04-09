class mainOffice{
    constructor(name){
        this.name = name;
    }

    hrManagement(){
        console.log(`${this.name} is belongs from HR staff`);
    }
}

class traineeOffice extends mainOffice{
    data(){
        console.log(this.name);
    }
}

class adminOffice extends mainOffice{

}

let aliBaqir = new mainOffice("Ali Baqir");

aliBaqir.hrManagement()

let ibrahim=new traineeOffice("Bashir");
ibrahim.hrManagement();
ibrahim.data();
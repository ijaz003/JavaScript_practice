// This keyword is target the particular object in which we are doing work
//In object this refer to the current object 


const person = {
    firstName: "John",
    lastName : "Doe",
    id       : 5566,
    getThis : function() {
      return this;
    }
};
console.log(person.getThis());

// In case of the arrow function in object it return undefined

const person1 = {
    firstName: "John",
    lastName : "Doe",
    id       : 5566,
    getThis : () =>{
      return `Hey ${this.firstName} ${this.lastName}`;
    }
};
console.log(person1.getThis());

// In case of the function this keyword refer to the globel object

// "use strict"; when we use strict at the top of the function then this keyword inside function return undefined

function x()
{
    return this;
}
console.log(x());


// Add EvetListner 
// this will print the buttion element from the html page
document.getElementById('mybutton').addEventListener('click', function() {
    console.log('this in a event', this);
})
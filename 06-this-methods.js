/* This keyword has following method.
    (i) call
    (ii)apply
    (iii)bind
*/
const person = {
    firstName: "Haider",
    lastName : "Khalid",
    id       : 5566,
    getThis : function() {
      return this;
    }
};
const person1 = {
    firstName: "Ijaz",
    lastName : "Akbar",
    id       : 5566,
    getThis : function (location,a,b,c){
      return `Hey ${this.firstName} ${this.lastName} From ${location} a=${a} b=${b} c=${c}`;
    }
};
//(i) Call method :

console.log(person1.getThis.call(person,"Lahore",3,4,63));

// In case of the function
console.log("In case of object");

 function getThis(location){
    return `Hey ${this.firstName} ${this.lastName} From ${location} `;
  }

  console.log(getThis.call(person1,"Karachi"))

//(ii) Apply Method
// Apply Mthod pass the Arguments into the array
console.log(person1.getThis.apply(person,['Rawalakot',1,2,3]));

//In Case of the function
function getThis(location){
    return `Hey ${this.firstName} ${this.lastName} From ${location} `;
  }
console.log(getThis.apply(person,["India"]))

//(iii) Bind Method
// Bind Method Return 
let info=person1.getThis.bind(person,'Kasur',1090,23152342344,9);
console.log(info())

// In case of the function 
function getThis(location){
    return `Hey ${this.firstName} ${this.lastName} From ${location} `;
  }
  let info1=getThis.bind(person1,"Peshawer");
  console.log(info1())
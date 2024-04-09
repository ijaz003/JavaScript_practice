/*
// Promise One
let PromiseOne=new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("PromiseOne !");
        resolve();
    },4000)
})
PromiseOne.then(function(){
    console.log("Promise One is resolved ! ");
})

// Promise two without variable
new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("PromiseTwo !");
        resolve();
    },6000)
}).then(function(){
    console.log("Promise two is resolved !")
})

// Promise Three with passing parameter passing inside of the resolve 
let PromiseThree=new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Promise Three !");
        resolve({Name:"ijaz",Location:"Lahore",id:45});
    },8000)
})
PromiseThree.then(function(obj){
    console.log(obj)
})
*/

// Promise four with catch and using double then statement
let PromiseFour=new Promise((resolve,reject)=>{
    let Error=true;
    setTimeout(()=>{
        if(!Error)
        {
            console.log("Promise Four !");
            resolve({Name:"Jack",Location:"Washington",id:46});
        }
        else{
            reject({Name:"Willaim"});
        }
    },1000)
})
PromiseFour.then((value)=>{
    console.log(value);
    return value.Name;
}).then((val)=>{
    console.log(val)
}).catch((val2)=>{
    console.log(val2.Name)
    console.log("There is an Error ! ");
}).finally(()=>{
    console.log("Finally All the Task we do it !");
})

// let promiseFive=new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         let error=true;
//         if(!error){
//             resolve({Name:"ijaz",id:45});
//         }
//         else{
//             reject("Error: Js went wrong !");
//         }
//     })
// });

// async function ConsumePromiseFive(){
//     try {
//         const response=await promiseFive;
//         console.log(response);
//     }
//     catch(error){
//         console.log(error);
//     }
// }
// ConsumePromiseFive()

// Fetch data
// async function ConsumePromiseSix(){
//     try {
//         const response=await fetch('https://jsonplaceholder.typicode.com/users');
//         console.log(response)
//         const data=await response.json();
//         console.log(data)
//     }
//     catch(error){
//         console.log(error);
//     }
// }


fetch('https://jsonplaceholder.typicode.com/users').then((response)=>{
    return response.json();
}).then((data)=>{
    console.log(data);
})
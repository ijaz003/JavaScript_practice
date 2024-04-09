
// Promise
// const myPromise=new Promise((solve,reject)=>{
//     let error=true;
//     setTimeout(function(){
//         if(!error)
//         {
//             solve({Name:"ijaz",RollNO:23})
//         }
//         else{
//             reject(`.......Error...........`)
//         }
//     },2000)
// })
// myPromise.then((val)=>{
//     return val;
// })
// .then((val)=>{
//     console.log(val);
// })
// .catch((val1)=>{
//     console.log(val1);
// })

//Async Await
async function myAsyncFunction() {
    try {
      const result = await fetch('https://jsonplaceholder.typicode.com/users');
      console.log(await result.json()); // Operation completed successfully!
    } catch (error) {
      console.error(error); // Operation failed!
    }
  }
  
  myAsyncFunction();
  
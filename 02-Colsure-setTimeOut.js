// Java Script not wait for nothing if there is time interval then it will move on the next step .
/*
function x()
{
    let a=35;
    setTimeout(function y(){
        console.log(a);
    },10000)
    console.log("Well Come ! ");
}
x();


// In this case it print the same value that will be the end value of the loop because of var variable can't capture the instant value of the i.

for(var i=0; i<=5; i++)
{
   function z(i) //By using funtion we will be able to capture the current value
   {
       setTimeout(function z()
       {
           console.log(i);
        },i*1000);
   }
   z(i);
}
*/

for(let i=0; i<=5;i++)
{
    setTimeout(function z()
    {
        console.log(i);
    },i*1000);
}
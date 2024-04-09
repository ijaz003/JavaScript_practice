// The function that is passed as the argument into the function it is also know as call back function.
/*
setTimeout(function(){
    console.log("Time up")
},0)
function firstfunc(parafunc,val)
{
    console.log("This is the first class function ");
    parafunc();
}
function callBack()
{
    console.log("Hello i am call back function! ");
}

firstfunc(callBack,5)

*/

// Function to be called when the button is clicked
function handleClick() {
    alert('Button clicked!');
  }
  
  // Getting a reference to the button element
  var myButton = document.getElementById('mybutton');
  
  // Adding an event listener to the button
  myButton.addEventListener('click', handleClick);
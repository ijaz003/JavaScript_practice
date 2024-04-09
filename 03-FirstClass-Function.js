/*
First Class Function:
                    In programming, a first-class function is a concept where functions can be assigned to variables, passed as arguments to other functions, and returned from other functions.
*/
// Stored it into the another variable

function addition(a)
{
    return a+a
}

let func=addition;
// console.log(func(3));

function apply(func1,b)
{
    return func1(b);
}
let result=apply(addition,4);
console.log(result)
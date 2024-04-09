function z()
{
    let a=23;
    function y()
    {
        let b=24;
        function x()
        {
            console.log(a,b);
        }
        x()
    }
    return y;
};
let col=z()
console.log(col()); // y is also return its parent lexical scope
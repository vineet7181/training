// function a(c)
// {
//     c();
//     console.log("inside function a");
// }
// function b()
// {
//     console.log("inside function b");

// }
// a(b);
function outer()
{
    let num=1;
    function inner()
    {
        num++;
        console.log(num);
    }
    return inner;
}
let ans=outer();
ans();
ans();
ans();
ans();
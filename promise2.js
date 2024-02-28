function Promise1()
{
    return new Promise((rev,rej)=>{
        rej();
    })
}
console.log(Promise1())
let person={
    name:"vineet",
    fun:function(){
        console.log("inside person object")
    }
};
let a=Object.create(person);
let b=Object.create(a);
console.log(person)
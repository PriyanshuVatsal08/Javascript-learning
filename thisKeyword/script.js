// value of "this" keyword in global
console.log(this); // ====> window


// value of "this" keyword in function
function test(){
    console.log(this); // ====> window
}
test();


// value of "this" keyword in method with es5 function
let obj={
    name:"priyanshu",

    sayHello: function(){
        console.log(this);
    }
}
obj.sayHello(); //====> Object

// value of "this" keyword in method with arow function
let obj2={
    name: "Priyanshu",

    sayHello: ()=>{
        console.log(this);
    }
}
obj2.sayHello() //====> window

// value of "this" keyword in arrow function inside es5 function
let obj3={
    name: "Priyanshu",

    sayHello: function(){
        let newFun=()=>{
            console.log(this);
        }
        newFun()
    }
}
obj3.sayHello() 

// value of "this" keyword in eventListener
document.querySelector("button").addEventListener("click",function(){
   
    console.log(this); //====> element on which event listener is attach
})


class Test{
    constructor(){
        console.log(this);   
    }
}
let object=new Test();
// console.log(object);







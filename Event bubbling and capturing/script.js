let a =document.querySelector("#a");
let b =document.querySelector("#b");
let c =document.querySelector("#c");

let button=document.querySelector("button");

button.addEventListener("click", function(e){
    e.stopPropagation();
    console.log("Button click");
})

a.addEventListener("click", function(e){
    e.stopPropagation();
    console.log("A clicked");
})
b.addEventListener("click", function(e){
    e.stopPropagation();
    console.log("B clicked");
})
c.addEventListener("click", function(e){
    e.stopPropagation();
    console.log("C clicked");
})
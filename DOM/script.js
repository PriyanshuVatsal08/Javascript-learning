// let img=document.querySelector("img");
// //setAttribute
// img.setAttribute("src","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQn2nmWoa-66Yo5xylQwIiAxtvMrK2pB2l4CA&s");


// //getAttribute
// console.log(img.getAttribute("src"));

// //removeAttribute
// img.removeAttribute("src");


// let box = document.querySelector("#box");

// let firstHeading=document.createElement("h1");
// firstHeading.textContent="Hello";
// box.prepend("1",firstHeading);

// let lastHeading=document.createElement("h1");
// lastHeading.textContent="What's up";
// box.append("2",lastHeading);

// let para=document.querySelector("p");

// function colorChange(){
//     para.style.color="red";
// }

// para.addEventListener("click",colorChange);

// para.removeEventListener("click",colorChange);

// let input=document.querySelector("input");

// input.addEventListener("input",function(e){
//     if(e.data !== null){
//         console.log(e.data);
//     }
// })

let sel=document.querySelector("select");
let h1=document.querySelector("h1");

sel.addEventListener("change",function(e){
    console.log(e.target.value);
    h1.textContent=`${e.target.value} Device selected`
})
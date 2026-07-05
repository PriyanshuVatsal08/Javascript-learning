let start_Button = document.querySelector("#start_button");

let stop_Button = document.querySelector("#stop_button")
let h = document.querySelector("h1");

let reset_Button = document.querySelector("#reset_button");

let counter = 0;
let id = null;
start_Button.addEventListener("click", function () {
    if (id === null) {
        id = setInterval(() => {
            counter++;
            h.textContent = counter;
            console.log(counter);

        }, 1000);
    }
});

stop_Button.addEventListener("click", function () {
    clearInterval(id);
    id=null;
});


reset_Button.addEventListener("click", function () {
    h.textContent = "0";
    counter = 0;
});


// function greet(name){
//     console.log(`Hello ${name}`);
// }

// setTimeout(greet,1000,"Priyanshu");

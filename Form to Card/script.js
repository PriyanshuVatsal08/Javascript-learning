let submitt = document.querySelector("#submitt");

let inputs = document.querySelectorAll("input");

let p = document.querySelectorAll("p");

let profile = document.querySelector("img");

submitt.addEventListener("click", function (e) {
    e.preventDefault();
    profile.setAttribute("src", `${inputs[0].value}`);
    p[0].textContent = inputs[1].value;
    p[1].textContent = inputs[2].value;
    p[2].textContent = inputs[3].value;
});


document.querySelector("ul").addEventListener("click", function (e) {
    e.target.classList.toggle("lt");
});




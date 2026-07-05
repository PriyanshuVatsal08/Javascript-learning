let btn = document.querySelector("button");
let body = document.querySelector("body");

let savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {
    body.classList.add("dark");
} else {
    body.classList.add("light");
}

btn.addEventListener("click", function () {
    if (body.classList.contains("dark")) {
        body.classList.remove("dark");
        body.classList.add("light");

        localStorage.setItem("theme", "light");
    } else {
        body.classList.remove("light");
        body.classList.add("dark");

        localStorage.setItem("theme", "dark");
    }
});
let form=document.querySelector("form");
let email=document.querySelector("#email");
let password=document.querySelector("#password");

let error=document.querySelector("#error");

form.addEventListener("submit",function(e){
    e.preventDefault();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    let emailans=emailRegex.test(email.value);
    let passwordans=passwordRegex.test(password.value);

    if(!emailans){
        error.style.display="initial";
        
    }
})
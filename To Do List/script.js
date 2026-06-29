let input=document.querySelector("input");
let button=document.querySelector("button");
let task_div=document.querySelector("#task_div");


button.addEventListener("click",function(){
    if(input.value.trim() !==""){
        let div = document.createElement("div");

        div.classList.add("newTask_class")

        let newTask=document.createElement("p");

        let button=document.createElement("button");

        button.addEventListener("click",function(){
            div.remove();
        })

        button.classList.add("button");

        newTask.textContent=input.value;
        button.textContent="Delete"

        div.append(newTask);
        div.append(button);

        task_div.append(div);

        input.value="";
    }
    else{
        return;
    }
});

task_div.addEventListener("click",function(e){
    e.target.style.textDecoration="line-through";
});
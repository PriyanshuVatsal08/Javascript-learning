let input = document.querySelector("input");
let button = document.querySelector("button");
let task_div = document.querySelector("#task_div");


// Load tasks when page opens
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

tasks.forEach(function(task){
    createTask(task);
});


// Add task
button.addEventListener("click", function () {

    if(input.value.trim() !== ""){

        let task = input.value;

        tasks.push(task);

        // Save tasks
        localStorage.setItem("tasks", JSON.stringify(tasks));

        createTask(task);

        input.value = "";
    }
});


// Function to create task element
function createTask(task){

    let div = document.createElement("div");

    div.classList.add("newTask_class");

    let newTask = document.createElement("p");

    let deleteBtn = document.createElement("button");


    newTask.textContent = task;

    deleteBtn.textContent = "Delete";

    deleteBtn.classList.add("button");


    deleteBtn.addEventListener("click", function(){

        div.remove();

        // Remove from localStorage
        tasks = tasks.filter(function(item){
            return item !== task;
        });

        localStorage.setItem("tasks", JSON.stringify(tasks));

    });


    div.append(newTask);
    div.append(deleteBtn);

    task_div.append(div);
}


// Line through task
task_div.addEventListener("click", function(e){

    if(e.target.tagName === "P"){
        e.target.style.textDecoration = "line-through"; 
    }

});

// localStorage.removeItem("tasks");
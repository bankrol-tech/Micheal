// =======================
// Academic Planner
// =======================

let tasks = [];

function addTask() {

    let taskInput = document.getElementById("taskInput");

    if (!taskInput) return;

    let task = taskInput.value.trim();

    if (task === "") {
        alert("Please enter a task.");
        return;
    }

    tasks.push(task);

    displayTasks();

    taskInput.value = "";
}

function displayTasks() {

    let taskList = document.getElementById("taskList");

    if (!taskList) return;

    taskList.innerHTML = "";

    tasks.forEach(function(task, index) {

        let li = document.createElement("li");

        li.innerHTML =
        task +
        " <button onclick='completeTask(this)'>Complete</button> " +
        "<button onclick='deleteTask(" + index + ")'>Delete</button>";

        taskList.appendChild(li);

    });

}

function deleteTask(index){

    tasks.splice(index,1);

    displayTasks();

}

function completeTask(button){

    button.parentElement.style.textDecoration="line-through";
    button.parentElement.style.color="green";

}

// =======================
// Contact Form Validation
// =======================

let form = document.getElementById("contactForm");

if(form){

form.addEventListener("submit",function(e){

e.preventDefault();

let name=document.getElementById("name").value.trim();
let email=document.getElementById("email").value.trim();
let phone=document.getElementById("phone").value.trim();
let message=document.getElementById("message").value.trim();

let emailPattern=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;

if(name===""||email===""||phone===""||message===""){

alert("Please fill in all fields.");

return;

}

if(!emailPattern.test(email)){

alert("Enter a valid email address.");

return;

}

if(!/^[0-9]+$/.test(phone)){

alert("Phone number must contain only digits.");

return;

}

alert("Message sent successfully!");

form.reset();

});

}

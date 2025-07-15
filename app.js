function addTask() {
    let input = document.getElementById("input-Task");
    let taskText = input.value.trim();




    if (taskText === "") {
        alert("Please Enter a Task!")
        return;
    }




    let taskList = document.getElementById("taskList");
    let newTask = document.createElement("li")
    newTask.textContent = taskText






    var deleteBtn = document.createElement("button");
    deleteBtn.textContent = "x";

    deleteBtn.onclick = function () {
    newTask.remove();
    };






    newTask.onclick = function () {
        newTask.style.textDecoration = "line-through";
    };





    taskList.appendChild(newTask);
    newTask.appendChild(deleteBtn);


    input.value = "";


}
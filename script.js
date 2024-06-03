function addTask() {
    var taskInput = document.getElementById("taskInput");
    var taskText = taskInput.value.trim();

    if (taskText !== "") {
        var taskList = document.getElementById("taskList");
        var newTask = document.createElement("li");
        newTask.textContent = taskText;

        var completeButton = document.createElement("button");
        completeButton.textContent = "Mark Complete";
        completeButton.onclick = function() {
            newTask.classList.toggle("completed");
        };

        var deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.onclick = function() {
            taskList.removeChild(newTask);
        };

        newTask.appendChild(completeButton);
        newTask.appendChild(deleteButton);
        taskList.appendChild(newTask);

        taskInput.value = "";
    } else {
        alert("Please enter a task!");
    }
}
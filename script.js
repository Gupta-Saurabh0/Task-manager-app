document.addEventListener("DOMContentLoaded", function () {
    const taskInput = document.getElementById("taskInput");
    const addTaskButton = document.getElementById("addTaskButton");
    const taskList = document.getElementById("taskList");

    addTaskButton.addEventListener("click", function () {
        const taskText = taskInput.value.trim();
        if (taskText !== "") {
            addTask(taskText);
            taskInput.value = "";
        }
    });

    function addTask(taskText) {
        const taskItem = document.createElement("li");
        taskItem.classList.add("task-item");
        
        const taskSpan = document.createElement("span");
        taskSpan.textContent = taskText;
        taskItem.appendChild(taskSpan);
        
        const completeButton = document.createElement("button");
        completeButton.textContent = "✓";
        completeButton.classList.add("complete");
        completeButton.addEventListener("click", function () {
            taskItem.classList.toggle("completed");
        });
        taskItem.appendChild(completeButton);
        
        const editButton = document.createElement("button");
        editButton.textContent = "✎";
        editButton.classList.add("edit");
        editButton.addEventListener("click", function () {
            const newText = prompt("Edit task:", taskSpan.textContent);
            if (newText !== null && newText.trim() !== "") {
                taskSpan.textContent = newText.trim();
            }
        });
        taskItem.appendChild(editButton);
        
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "✗";
        deleteButton.classList.add("delete");
        deleteButton.addEventListener("click", function () {
            taskList.removeChild(taskItem);
        });
        taskItem.appendChild(deleteButton);
        
        taskList.appendChild(taskItem);
    }
});

var taskList = document.getElementById("taskList");

// Add event listener to the task form for submitting new tasks
var taskForm = document.getElementById("taskForm");
taskForm.addEventListener("submit", function (e) {
    e.preventDefault();
    var taskInput = document.getElementById("taskInput");
    if (taskInput.value) {
        addTask(taskInput.value);
        taskInput.value = "";
    }
});

// Add a new task to the task list
function addTask(taskText) {
    // Create a new row for the task
    var taskRow = document.createElement("tr");

    // Create a cell for the task text
    var taskCell = document.createElement("td");
    taskCell.textContent = taskText;
    taskRow.appendChild(taskCell);

    // Create a cell for the update button
    var updateCell = document.createElement("td");
    var updateButton = document.createElement("button");
    updateButton.classList.add("updateButton");
    updateButton.textContent = "Update";
    updateButton.style.display = "inline-block";
    updateButton.addEventListener("click", function () {
        var newTaskText = prompt("Enter the updated task:", taskText);
        if (newTaskText) {
            taskCell.textContent = newTaskText;
        }
    });
    updateCell.appendChild(updateButton);
    taskRow.appendChild(updateCell);

    // Create a cell for the remove button
    var removeCell = document.createElement("td");
    var removeButton = document.createElement("button");
    removeButton.classList.add("removeButton");
    removeButton.textContent = "Remove";
    removeButton.style.display = "inline-block";
    removeButton.addEventListener("click", function () {
        taskRow.remove();
    });
    removeCell.appendChild(removeButton);
    taskRow.appendChild(removeCell);

    // Add the task row to the task list
    taskList.appendChild(taskRow);
}
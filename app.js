// Get the elements from the HTML
const addTask = document.getElementById('add-task');
const taskContainer = document.getElementById('task-container');
const inputTask = document.getElementById('input-task');

// Add an event listener to the "Add Task" button
addTask.addEventListener("click", function() {

    // Create a task container div
    let task = document.createElement('div');
    task.classList.add('task');

    // Create a list item to display the task text
    let li = document.createElement('li');
    li.innerText = `${inputTask.value}`;
    task.appendChild(li);

    // Create a button for marking a task as completed
    let checkButton = document.createElement("button");
    checkButton.innerHTML = '<i class="fa fa-check"></i>'
    checkButton.classList.add('checkTask');
    task.appendChild(checkButton);

    // Create a button for deleting a task
    let deleteButton = document.createElement("button");
    deleteButton.innerHTML = '<i class="fa fa-trash"></i>'
    deleteButton.classList.add('deleteTask');
    task.appendChild(deleteButton);

    // Check if the input field is empty
    if(inputTask.value === ""){
        alert('Please enter a task');
    } else {
        // Append the task container to the task list
        taskContainer.appendChild(task);
    }

    // Clear the input field
    inputTask.value = "";

    // Add event listener to the "Check" button within each task
    checkButton.addEventListener("click", function() {
        // Add a line-through style to mark the task as completed
        checkButton.parentElement.style.textDecoration = "line-through";
    });

    // Add event listener to the "Delete" button within each task
    deleteButton.addEventListener("click", function(e) {
        // Remove the entire task container when the delete button is clicked
        let target = e.target;
        target.parentElement.parentElement.remove();
    });

});

document.addEventListener('DOMContentLoaded', function() {
    const taskInput = document.getElementById('taskInput');
    const addTaskBtn = document.getElementById('addTaskBtn');
    const taskList = document.getElementById('taskList');

    // Function to add a new task
    function addTask() {
        const taskText = taskInput.value.trim();
        if (taskText === '') return;

        const taskItem = document.createElement('li');
        taskItem.className = 'task-item';

        const taskSpan = document.createElement('span');
        taskSpan.textContent = taskText;

        const deleteBtn = document.createElement('button');
        deleteBtn.className = 'delete-btn';
        deleteBtn.textContent = 'Delete';

        taskItem.appendChild(taskSpan);
        taskItem.appendChild(deleteBtn);
        taskList.appendChild(taskItem);

        // Clear input field
        taskInput.value = '';

        // Add event listeners for the new task
        taskSpan.addEventListener('click', toggleComplete);
        deleteBtn.addEventListener('click', deleteTask);
    }

    // Function to toggle task completion
    function toggleComplete(e) {
        const taskItem = e.target.parentElement;
        taskItem.classList.toggle('completed');
    }

    // Function to delete a task
    function deleteTask(e) {
        const taskItem = e.target.parentElement;
        taskList.removeChild(taskItem);
    }

    // Event listeners
    addTaskBtn.addEventListener('click', addTask);
    
    // Allow adding tasks with Enter key
    taskInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            addTask();
        }
    });
});

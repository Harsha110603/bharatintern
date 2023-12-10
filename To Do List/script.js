document.addEventListener("DOMContentLoaded", function () {
    loadTasks();
});

function loadTasks() {
    const taskList = document.getElementById("taskList");
    taskList.innerHTML = "";

    const tasks = getTasks();

    tasks.forEach(task => {
        const li = document.createElement("li");
        li.innerHTML = `
            ${task}
            <button onclick="removeTask('${task}')">Delete</button>
        `;
        taskList.appendChild(li);
    });
}

function addTask() {
    const taskInput = document.getElementById("taskInput");
    const task = taskInput.value.trim();

    if (task !== "") {
        const tasks = getTasks();
        tasks.push(task);
        saveTasks(tasks);
        loadTasks();
        taskInput.value = "";
    }
}

function removeTask(taskToRemove) {
    const tasks = getTasks().filter(task => task !== taskToRemove);
    saveTasks(tasks);
    loadTasks();
}

function getTasks() {
    const tasksString = localStorage.getItem("tasks");
    return tasksString ? JSON.parse(tasksString) : [];
}

function saveTasks(tasks) {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

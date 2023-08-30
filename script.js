document.getElementById("addButton").addEventListener("click", function() {
    var taskName = document.getElementById("newTask").value;
    if (taskName !== "") {
        var newTaskItem = document.createElement("li");
        newTaskItem.innerHTML = '<span class="task-name">' + taskName + '</span> <button class="delete-button">&#10006;</button>';
        document.getElementById("tasks").appendChild(newTaskItem);
        document.getElementById("newTask").value = "";
        setTaskClickListeners(newTaskItem);
        setDeleteButtonListeners();
    }
});

function setTaskClickListeners(taskItem) {
    taskItem.querySelector('.task-name').addEventListener('click', function() {
        taskItem.classList.toggle('completed');
    });
}

document.getElementById("clearCompletedButton").addEventListener("click", function() {
    var completedTasks = document.querySelectorAll(".task-name.completed");
    completedTasks.forEach(function(task) {
        task.parentElement.remove();
    });
});

function updateCurrentDateTime() {
    var now = new Date();
    var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric', timeZoneName: 'short' };
    var formattedDate = now.toLocaleDateString('pt-BR', options);
    document.getElementById('currentDateTime').textContent = formattedDate;
}

updateCurrentDateTime(); // Atualizar a data/hora quando a página é carregada

setInterval(updateCurrentDateTime, 1000); // Atualizar a cada segundo

// Adicione ouvintes de clique para tarefas existentes
var existingTasks = document.querySelectorAll(".task-name");
existingTasks.forEach(function(task) {
    setTaskClickListeners(task.parentElement);
});



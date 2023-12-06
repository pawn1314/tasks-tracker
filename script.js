let currentUser = null;

function login() {
    const usernameInput = document.getElementById('username');
    const username = usernameInput.value.trim();

    if (username !== '') {
        currentUser = username;
        showTaskList();
    } else {
        alert('Please enter a valid username.');
    }
}

function showTaskList() {
    const taskListDiv = document.getElementById('task-list');
    taskListDiv.innerHTML = ''; // Clear previous content

    const tasks = ['Task 1', 'Task 2'];

    tasks.forEach((task, index) => {
        const taskItem = document.createElement('div');
        taskItem.classList.add('task-item');

        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.id = `task${index}`;
        checkbox.onclick = () => toggleTask(index);

        const label = document.createElement('label');
        label.htmlFor = `task${index}`;
        label.textContent = task;

        taskItem.appendChild(checkbox);
        taskItem.appendChild(label);
        taskListDiv.appendChild(taskItem);
    });
}

function toggleTask(index) {
    const checkbox = document.getElementById(`task${index}`);
    const taskItem = checkbox.parentNode;

    if (checkbox.checked) {
        taskItem.classList.add('completed');
    } else {
        taskItem.classList.remove('completed');
    }
}

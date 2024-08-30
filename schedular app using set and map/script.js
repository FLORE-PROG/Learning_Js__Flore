// Task class definition
class Task {
    constructor(id, name, description, dueDate) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.dueDate = new Date(dueDate);
    }
    
    toString() {
        return `${this.name} - ${this.description} - Due: ${this.dueDate.toLocaleDateString()}`;
    }
}

// Scheduler class definition
class Scheduler {
    constructor() {
        this.tasks = new Map();
        this.completedTasks = new Set();
        this.nextId = 1;
        this.init();
    }

    init() {
        document.getElementById('addTaskButton').addEventListener('click', () => this.addTask());
        document.getElementById('markCompletedButton').addEventListener('click', () => this.markTaskCompleted());
        document.getElementById('removeTaskButton').addEventListener('click', () => this.removeTask());
        this.renderTasks();
    }

    addTask() {
        const name = document.getElementById('taskName').value;
        const description = document.getElementById('taskDescription').value;
        const dueDate = document.getElementById('taskDueDate').value;

        if (!name || !description || !dueDate) {
            alert('Please fill in all fields.');
            return;
        }

        const task = new Task(this.nextId++, name, description, dueDate);
        this.tasks.set(task.id, task);
        document.getElementById('taskName').value = '';
        document.getElementById('taskDescription').value = '';
        document.getElementById('taskDueDate').value = '';
        this.renderTasks();
    }

    markTaskCompleted() {
        const selectedTaskId = this.getSelectedTaskId();
        if (selectedTaskId !== null) {
            this.completedTasks.add(selectedTaskId);
            this.renderTasks();
        }
    }

    removeTask() {
        const selectedTaskId = this.getSelectedTaskId();
        if (selectedTaskId !== null) {
            this.tasks.delete(selectedTaskId);
            this.completedTasks.delete(selectedTaskId);
            this.renderTasks();
        }
    }

    getSelectedTaskId() {
        const selectedElement = document.querySelector('#taskList li.selected');
        return selectedElement ? parseInt(selectedElement.dataset.id) : null;
    }

    renderTasks() {
        const taskList = document.getElementById('taskList');
        taskList.innerHTML = '';

        this.tasks.forEach((task) => {
            const li = document.createElement('li');
            li.textContent = task.toString();
            li.dataset.id = task.id;
            if (this.completedTasks.has(task.id)) {
                li.style.textDecoration = 'line-through';
                li.style.backgroundColor = '#d4edda';
            }
            li.addEventListener('click', () => this.selectTask(li));
            taskList.appendChild(li);
        });
    }

    selectTask(element) {
        const selected = document.querySelector('#taskList li.selected');
        if (selected) selected.classList.remove('selected');
        element.classList.add('selected');
    }
}

// Initialize the scheduler application
window.onload = () => new Scheduler();


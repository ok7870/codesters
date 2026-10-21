import { useState } from 'react';
import './App.css';

function App() {
  // Store the text entered in the input field.
  const [taskInput, setTaskInput] = useState('');

  // Store the list of tasks.
  const [tasks, setTasks] = useState([]);

  // Add a new task to the list.
  const addTask = (event) => {
    // Prevent the form from refreshing the page.
    event.preventDefault();

    // Remove extra spaces from the entered task.
    const trimmedTask = taskInput.trim();

    // Do not add an empty task.
    if (trimmedTask === '') return;

    // Add the new task with a unique ID.
    const newTask = {
      id: Date.now(),
      text: trimmedTask,
    };

    setTasks((previousTasks) => [...previousTasks, newTask]);

    // Clear the input field after adding the task.
    setTaskInput('');
  };

  // Delete a task using its unique ID.
  const deleteTask = (id) => {
    setTasks((previousTasks) =>
      previousTasks.filter((task) => task.id !== id)
    );
  };

  return (
    <main className="app-container">
      <section className="todo-card">
        <h1>My To-Do List</h1>
        <p className="subtitle">Organize your day, one task at a time.</p>

        {/* Form for entering and submitting new tasks */}
        <form className="task-form" onSubmit={addTask}>
          <input
            type="text"
            placeholder="Enter a new task..."
            value={taskInput}
            onChange={(event) => setTaskInput(event.target.value)}
            aria-label="New task"
          />

          <button type="submit">Add Task</button>
        </form>

        {/* Display the number of tasks */}
        <p className="task-count">
          {tasks.length} {tasks.length === 1 ? 'task' : 'tasks'}
        </p>

        {/* Render the list of tasks */}
        {tasks.length === 0 ? (
          <p className="empty-message">
            No tasks yet. Add your first task!
          </p>
        ) : (
          <ul className="task-list">
            {tasks.map((task) => (
              <li key={task.id} className="task-item">
                <span>{task.text}</span>

                <button
                  type="button"
                  className="delete-button"
                  onClick={() => deleteTask(task.id)}
                  aria-label={`Delete ${task.text}`}
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
        )}
      </section>
    </main>
  );
}

export default App;
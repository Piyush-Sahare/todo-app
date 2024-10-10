import React, { useState } from 'react';
import ToDoItem from './ToDoItem';

function ToDoList({ tasks, addTask, deleteTask, toggleTaskCompletion, editTask }) {
    const [newTask, setNewTask] = useState('');

    const handleAddTask = () => {
        if (newTask.trim()) {
            addTask(newTask); // Add the task to the list
            setNewTask(''); // Clear input field
        }
    };

    return (
        <div className="todo-list">
            <div className="task-input">
                <input 
                    type="text" 
                    value={newTask} 
                    onChange={(e) => setNewTask(e.target.value)} // Update state on change
                    placeholder="Add new task" 
                />
                <button onClick={handleAddTask}>Add Task</button> 
            </div>

            <ul className="tasks">
                {tasks.map(task => (
                    <ToDoItem
                        key={task.id} // Unique key for each item
                        task={task}
                        deleteTask={deleteTask}
                        toggleTaskCompletion={toggleTaskCompletion}
                        editTask={editTask}
                    />
                ))}
            </ul>
        </div>
    );
}

export default ToDoList;

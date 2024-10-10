import React, { useState, useEffect } from 'react'; 
import Header from './components/Header'; 
import ToDoList from './components/ToDoList'; 
import './App.css'; 

function App() {
    // State to store tasks, initializing with tasks from localStorage or an empty array if not present
    const [tasks, setTasks] = useState(() => {
        const savedTasks = localStorage.getItem('tasks'); // Get tasks from localStorage if they exist
        return savedTasks ? JSON.parse(savedTasks) : []; // Parse and return tasks if available, else return an empty array
    });

    // useEffect hook to update localStorage whenever the tasks state changes
    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(tasks)); 
    }, [tasks]); // Runs every time the tasks array changes

    // Function to add a new task
    const addTask = (task) => {
        setTasks([...tasks, { id: Date.now(), text: task, completed: false }]); 
    };

    // Function to delete a task based on its ID
    const deleteTask = (id) => {
        setTasks(tasks.filter(task => task.id !== id)); 
    };

    // Function to toggle a task's completion status
    const toggleTaskCompletion = (id) => {
        setTasks(
            tasks.map(task =>
                task.id === id ? { ...task, completed: !task.completed } : task 
            )
        );
    };

    // Function to edit an existing task's text
    const editTask = (id, newText) => {
        setTasks(tasks.map(task => 
            task.id === id ? { ...task, text: newText } : task 
        ));
    };

    return (
        <div className="app-container">
            {/* Render the Header component */}
            <Header /> 
            {/* Render the ToDoList component and pass the necessary props */}
            <ToDoList 
                tasks={tasks} 
                addTask={addTask} 
                deleteTask={deleteTask} 
                toggleTaskCompletion={toggleTaskCompletion} 
                editTask={editTask} 
            />
        </div>
    );
}

export default App;

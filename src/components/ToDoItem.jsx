import React, { useState } from 'react'; 
import { FaCheck, FaTrash, FaEdit, FaUndo, FaSave, FaTimes } from 'react-icons/fa'; // importing fontawesome icons

// component representing a single to-do item
function ToDoItem({ task, deleteTask, toggleTaskCompletion, editTask }) {
    // state to track if the task is being edited
    const [isEditing, setIsEditing] = useState(false); 
    // state to hold the current text of the task while editing
    const [editedText, setEditedText] = useState(task.text); 

    //function to toggle the editing mode
    const handleEdit = () => {
        setIsEditing(!isEditing); 
    };

    // function to handle saving the edited task
    const handleSaveEdit = () => {
        editTask(task.id, editedText); // Call the editTask function passed via props
        setIsEditing(false); // exit editing mode after saving
    };

    return (
        <li className={`task-item ${task.completed ? 'completed' : ''}`}> 
            {isEditing ? (
                // show input field when editing
                <input 
                    type="text"
                    value={editedText} // input field value is set to editedText state
                    onChange={(e) => setEditedText(e.target.value)} // update the text as the user types
                />
            ) : (
                // display the task text when not editing
                <span>{task.text}</span>
            )}
            
            {/* Action buttons for task actions */}
            <div className="task-actions">
                {task.completed ? (
                    // Show 'Undo' button if the task is completed
                    <button onClick={() => toggleTaskCompletion(task.id)} title="Undo">
                        <FaUndo />
                    </button>
                ) : (
                    // Show 'Complete' button if the task is not completed
                    <button onClick={() => toggleTaskCompletion(task.id)} title="Complete">
                        <FaCheck />
                    </button>
                )}
                
                {/* Button to delete the task */}
                <button onClick={() => deleteTask(task.id)} title="Delete">
                    <FaTrash />
                </button>
                
                {isEditing ? (
                    // Show Save and Cancel buttons when editing
                    <>
                        <button onClick={handleSaveEdit} title="Save">
                            <FaSave />
                        </button>
                        <button onClick={handleEdit} title="Cancel">
                            <FaTimes />
                        </button>
                    </>
                ) : (
                    // Show Edit button when not editing
                    <button onClick={handleEdit} title="Edit">
                        <FaEdit />
                    </button>
                )}
            </div>
        </li>
    );
}

export default ToDoItem;

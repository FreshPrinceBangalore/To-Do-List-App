import React, { useState } from "react";


function ToDoListApp(){
    const [task ,setTask] = useState([]);
    const [newTask ,setNewTask] = useState("");

    function handleInputChange(event){
        setNewTask(event.target.value);
    }

    function toAddTask(){
        if(newTask.trim() !== ""){
            setTask( t => [...t,newTask]);
            setNewTask("");
        }
    }

    function toDeleteTask(index){
        const updatedTask = task.filter((_,i) => i!== index);
        setTask(updatedTask);

    }

    function toMoveTaskUp(index){
        if( index > 0 ){
            const updatedTask = [...task];
            [updatedTask[index] ,updatedTask[index - 1]] = [updatedTask[index - 1] , updatedTask[index]];
            setTask(updatedTask);
        }
    }

    function toMoveTaskDown(index){
        if( index < task.length - 1){
            const updatedTask = [...task];
            [updatedTask[index] , updatedTask[index+1]] = [updatedTask[index + 1] ,updatedTask[index]];
            setTask(updatedTask);

        }

    }

    return(
        <div className="to-do-list">
            <h1>To Do List</h1>
            <div>
                <input type="text" value={newTask} placeholder="Enter the Task..." onChange={handleInputChange}/>
                <button className="add-button" onClick={toAddTask}>Add</button>
            </div>
            <ol>
                {task.map((task,index) => <li key={index}>
                    <span className="text">{task}</span>
                    <button className="to-delete" onClick={() => toDeleteTask(index)}>Delete</button>  
                    <button className="to-move" onClick={() => toMoveTaskUp(index)}>🔼</button>
                    <button className="to-move" onClick={() => toMoveTaskDown(index)}>🔽</button>     
                    </li>)}
            </ol>
        </div>
    );
}

export default ToDoListApp
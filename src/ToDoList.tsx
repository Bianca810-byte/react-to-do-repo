import React, { useState } from "react";

function ToDoList() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState([]); //will be adding newTask to array of tasks

  function handleInputChange(event) {
    //for textbox when we type something
    console.log("input");
    setNewTask(event.target.value); //if we don't set this, won't show in text box(replace placeholder)
  }

  function addTask() {
    if (newTask.trim() !== "") {
      setTasks((t) => [...t, newTask]); //t=> is the previous state of tasks
      setNewTask("");
    }
  }

  function deleteTask(index) {
    //index of task we want to delete
    const updatedTasks = tasks.filter((_, i) => i !== index);
    //if current index of i is strictly !== to index we would like to delete, put it within new array of updatedTasks
    //element and i(index) of that element during each iteration. conflict. have a param named index for the index we want to delete.
    //if the two indexes match, filter it out we don't wnat it.
    //setNewTask = updatedTasks;
    setTasks(updatedTasks);
  }

  function moveTaskUp(index) {
    //what is index of list item we would like to move up within our list
    if (index > 0) {
      const updatedTasks = [...tasks];
      [updatedTasks[index], updatedTasks[index - 1]] = [
        updatedTasks[index - 1],
        updatedTasks[index],
      ];
      setTasks(updatedTasks);
    }
  }

  function moveTaskDown(index) {
    if (index < tasks.length - 1) {
      const updatedTasks = [...tasks];
      [updatedTasks[index], updatedTasks[index + 1]] = [
        updatedTasks[index + 1],
        updatedTasks[index],
      ];
      setTasks(updatedTasks);
    }
  }

  return (
    <div className="to-do-list">
      <h1>To Do List</h1>
      <div>
        <input
          type="text"
          placeholder="Enter a task..."
          value={newTask}
          onChange={handleInputChange}
        />
        <button className="add-button" onClick={addTask}>
          Add
        </button>
      </div>

      <ol>
        {tasks.map((task, index) => (
          <li key={index}>
            <span className="text">{task}</span>
            <button className="delete-button" onClick={() => deleteTask(index)}>
              Delete
            </button>
            <button className="move-button" onClick={() => moveTaskUp(index)}>
              👆
            </button>
            <button className="move-button" onClick={() => moveTaskDown(index)}>
              👇
            </button>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default ToDoList;

// importing use state hooks
import React, { useState } from "react";

function TodoItem({ task }) {
  const [editClass, setEditClass] = useState("fa-solid fa-pen-to-square");
  const [isCompleted, setIsCompleted] = useState(task.completed);

  const textStyle = {
    textDecoration: isCompleted
      ? "line-through 2px hsl(199deg 31% 14%)"
      : "none",
  };
  //Inserting and Updating logic
  const editTask = (e) => {
    let taskInDOM = e.target.parentElement.parentElement.children[0];
    if (editClass === "fa-solid fa-pen-to-square") {
      let textToBeEdited = taskInDOM.children[1].innerText;
      const node = document.createElement("input");
      node.setAttribute("type", "text");
      node.setAttribute("value", textToBeEdited);
      taskInDOM.appendChild(node);
      taskInDOM.children[1].remove();
      setEditClass("fa-solid fa-check");
    } else {
      let newTaskAfterEdit = taskInDOM.children[1].value;
      console.log(newTaskAfterEdit);
      const node = document.createElement("div");
      node.setAttribute("style", textStyle);
      node.innerText = newTaskAfterEdit;
      taskInDOM.appendChild(node);
      taskInDOM.children[1].remove();
      setEditClass("fa-solid fa-pen-to-square");
    }
  };
  //Deleting the Items from array.
  const deleteTask = (e) => {
    let taskInDOM = e.target.parentElement.parentElement.children[0];
    taskInDOM.parentElement.remove();
  };

  const completeTask = (e) => {
    if (isCompleted === true) {
      console.log(e.target.parentElement);
      setIsCompleted(false);
    } else {
      setIsCompleted(true);
    }
  };

  const completedStyle = {
    color: isCompleted ? "#4a00e0" : "blue",
  };

  return (
    // html structure of the application
    <div className="todo-item">
      <div className="icon-tasks">
        <i
          className="fa-solid fa-circle-check"
          onClick={completeTask}
          style={completedStyle}
        ></i>
        <div className="task-name" style={textStyle}>
          {task.title}
        </div>
      </div>
      <div className="icons">
        {/* //Completed task information  */}
        {/* edge case for editing completed tasks  */}
        {isCompleted ? (
          <i
            className={editClass}
            onClick={() => alert("Completed Task can't be edited")}
          ></i>
        ) : (
          <i className={editClass} onClick={editTask}></i>
        )}
        <i className="fa-solid fa-trash" onClick={deleteTask}></i>
      </div>
    </div>
  );
}

export default TodoItem;

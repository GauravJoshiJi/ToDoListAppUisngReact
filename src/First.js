import { useState } from "react";
import "./index.css";
import TodoContainer from "./components/TodoContainer";

function First() {
  const [task, setTask] = useState([]);

  const addTodo = () => {
    let newTask = document.getElementById("new-task");
    let newTaskObj = {
      completed: false,
      title: newTask.value,
      id: Date.now(),
    };
    task.push(newTaskObj);
    setTask(task);
    newTask.value = "";
  };

  return (
    // Our App html Structure
    <div className="App">
      <div className="todo-bar-container">
        <div className="todo-bar">
          <div
            style={{ borderRadius: "10px 0 0 10px" }}
            className="icon-container"
          >
            <i className="fa-solid fa-list"></i>
          </div>
          <input
            id="new-task"
            type="text"
            placeholder="Enter the task"
            autoComplete="off"
          />
          <div
            style={{ borderRadius: "0 10px 10px 0" }}
            className="icon-container"
            id="add-btn"
            onClick={addTodo}
          >
            <i className="fa-solid fa-plus"></i>
          </div>
        </div>
      </div>
      {/* Calling TodoContainer component  */}
      <TodoContainer addedTask={task} />
    </div>
  );
}

export default First;

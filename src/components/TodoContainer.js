import React, { useState, useEffect } from "react";
import TodoItem from "./TodoItem";
import { Bars } from "react-loader-spinner";

function TodoContainer({ addedTask }) {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [newTask, setNewTask] = useState(addedTask);
  //Fetching the data from API :-
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((json) => {
        setTimeout(() => {
          setTodos(json);
          setLoading(true);
        }, 1000);
        // console.log(json);
      });
  }, []);

  // Whenever the new task is added then that task
  useEffect(() => {
    let taskAddedByUser = addedTask.map((task, index) => {
      return <TodoItem task={task} key={index} />;
    });
    setNewTask(taskAddedByUser);
  }, [newTask]);

  return (
    //Ternery operator for showing data for true case else show animation.
    <div className="todo-container">
      {newTask}
      {loading ? (
        todos.map((task, index) => {
          return <TodoItem task={task} key={index} />;
        })
      ) : (
        <Bars
          height="80"
          width="80"
          color="blue"
          ariaLabel="bars-loading"
          visible={true}
        />
      )}
    </div>
  );
}

export default TodoContainer;

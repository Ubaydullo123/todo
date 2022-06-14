import React, { useRef } from "react";
import { useState } from "react";

import Task from "../components/Task";

import "../index.scss";

const Todo = () => {
  const [todoList, setTodoList] = useState([
    {
      text: "Learn React Js",
      completed: false,
    },
    {
      text: "Learn Node Js",
      completed: true,
    },
  ]);

  const formText = useRef(null);

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const newTask = {
      text: formText.current.value,
      completed: false,
    };
    const tasks = [...todoList, newTask];
    setTodoList(tasks);
    event.currentTarget.reset();
  };

  const deleteTask = (id) => {
    if (window.confirm("Do you want to delete this task")) {
      const tasks = todoList.filter((_, index) => index !== id);
      setTodoList(tasks);
    }
  };

  const changeStatus = (id) => {
    const tasks = [...todoList];
    tasks[id].completed = !tasks[id].completed;
    setTodoList(tasks);
  };

  return (
    <main className="todo container">
      <h1 className="header__title">Todo</h1>
      <form className="todo__form" onSubmit={handleFormSubmit}>
        <input type="text" ref={formText} />
        <button type="submit">Add</button>
      </form>
      <div>
        <ul className="todo__tasks">
          {todoList.map(({ text, completed }, index) => (
            <Task
              key={index}
              id={index}
              text={text}
              completed={completed}
              changeStatus={changeStatus}
              deleteTask={deleteTask}
            />
          ))}
        </ul>
      </div>
    </main>
  );
};

export default Todo;

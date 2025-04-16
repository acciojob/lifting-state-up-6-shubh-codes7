import React from "react";
import "./../styles/App.css";

const TodoList = ({ todos, handleComplete }) => {
  return (
    <div>
      {todos.map((todo, index) => (
        <li key={index}>
          {todo.todo} {!todo.state && <button onClick={()=>handleComplete(index)}>complete</button>}
        </li>
      ))}
    </div>
  );
};

export default TodoList;

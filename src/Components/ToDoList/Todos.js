import React from "react";
import ToDo from "./ToDo";

function Todos({ todos, toggleTodo }) {
  return (
    <div>
      {todos.map((todo) => {
        return <ToDo key={todo.id} todo={todo} toggleTodo={toggleTodo} />;
      })}
    </div>
  );
}

export default Todos;

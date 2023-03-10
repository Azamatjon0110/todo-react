import React from "react";
import TodoItem from "./TodoItem";

const TodoList = (props) => {
  const getDelId = (id) => {
    props.onDeleteTodo(id);
  };

  const editTodo = (id) => {
    props.onEditTodo(id);
  };

  const checkTodo = (id) => {
    props.onCheckTodo(id)
  }

  return (
    <ul className="list-unstyled">
      {props.data.map((item) => (
        <TodoItem
          key={item.id}
          {...item}
          onDelete={getDelId}
          onEdit={editTodo}
          onCheck={checkTodo}
        />
      ))}
    </ul>
  );
};

export default TodoList;

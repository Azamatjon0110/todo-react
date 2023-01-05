import React from "react";

const TodoItem = ({ title, id, isCompleted, onDelete, onEdit, onCheck }) => {
  const deleteTodo = () => {
    onDelete(id);
  };

  const editTodo = () => {
    onEdit(id);
  };

  const checkTodo = () => {
    onCheck(id);
  };

  return (
    <li className="px-5 py-4 border rounded-3 w-75 mx-auto bg-primary d-flex justify-content-between">
      <div className=" d-flex">

      <input
        className="me-2"
        defaultChecked={isCompleted}
        type="checkbox"
        onClick={checkTodo}
        />
      <h2
        className="todos-item-title"
        style={{ textDecoration: isCompleted ? "line-through" : "none" }}
        >
        {title}
      </h2>
        </div>
        <div className="d-flex">

      <button className="btn btn-danger me-2" type="button" onClick={deleteTodo}>
        Delete
      </button>
      <button className="btn btn-success" type="button" onClick={editTodo}>
        Edit
      </button>
        </div>
    </li>
  );
};

export default TodoItem;

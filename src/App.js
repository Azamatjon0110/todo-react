import { useState } from "react";
import Form from "./components/Form/Form";
import TodoList from "./components/Todo/TodoList";


function App() {
  const [todo, setTodo] = useState([]);

  const addTodo = (todo) => {
    setTodo((prev) => {
      return [...prev, todo];
    });
  };

  const deleteTodoHandler = (id) => {
    const filteredArr = todo.filter((item) => item.id !== id);
    setTodo(filteredArr);
  };

  const editTodoHandler = (id) => {
    const newTodo = [...todo];
    const item = newTodo.find((item) => item.id === id);
    const text = prompt("Enter text", item.title);
    item.title = text;
    setTodo(newTodo);
  };

  const checkTodoHandler = (id) => {
    const checkedTodo = [...todo];
    const item = checkedTodo.find((item) => item.id === id);
    item.isCompleted = !item.isCompleted;
    setTodo(checkedTodo);
  };

  return (

    <div className="app pt-5">
      <h1 className="text-secondary text-center">Todo App</h1>
      <Form onGetTodo={addTodo} />

      { (
        <TodoList
          data={todo}
          onDeleteTodo={deleteTodoHandler}
          onEditTodo={editTodoHandler}
          onCheckTodo={checkTodoHandler}
        />
      )}

    </div>
  );
}

export default App;

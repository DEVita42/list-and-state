import React, { useState } from "react";

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");

  function addTodo() {
    if (inputValue !== "") {
      setTodos([...todos, inputValue]);
      setInputValue("");
    } else {
      alert("Input field cannot be empty");
    }
  }

  function handleInputChange() {
    const value = event.target.value;
    setInputValue(value);
  }

  function handleReset() {
    setTodos([]);
  }

  function removeTodo(index) {
    const newTodos = todos.filter((todo, todoIndex) => todoIndex !== index);
    setTodos(newTodos);
  }

  return (
    <div>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo}
            <button onClick={() => removeTodo(index)}>Remove</button>
          </li>
        ))}
      </ul>
      <input type="text" value={inputValue} onChange={handleInputChange} />
      <button onClick={addTodo}>Add todo</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
};

export default TodoList
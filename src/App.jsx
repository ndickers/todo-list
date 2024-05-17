import { useState, useEffect } from "react";
import { nanoid } from "nanoid";

function App() {
  const [inputData, setInputData] = useState("");
  const [todo, setTodo] = useState([]);

  useEffect(() => {
    localStorage.setItem("todo", JSON.stringify());
    // const getTodos = localStorage.getItem("todos");
    // const todoArray = JSON.parse(getTodos);
    console.log(localStorage);
  }, []);

  const todoList = todo?.map((item) => (
    <label key={item.id}>
      <input
        checked={false}
        onChange={() => handleCheck(item.id)}
        type="checkbox"
      />
      {item.do}
      <button onClick={() => handleEditNote(item.id)}>edit</button>
      <br />
    </label>
  ));

  // edit todo implementation
  function handleEditNote(id) {
    setTodo((prevData) => {
      return prevData.map((item) =>
        item.id === id ? { ...item, do: inputData } : item
      );
    });
  }

  // delete todo implemetntation
  function handleCheck(id) {
    setTodo((prevData) => prevData.filter((todos) => todos.id !== id));
  }

  //add todo
  function addTodo() {
    setTodo((prevData) => [...prevData, { id: nanoid(4), do: inputData }]);
  }

  return (
    <div>
      <h1>Todo List</h1>

      <div>{todo.length === 0 ? <h1>Add todo list</h1> : todoList}</div>
      <div>
        <input onChange={(e) => setInputData(e.target.value)} />
        <button onClick={addTodo}>Add todo</button>
      </div>
    </div>
  );
}

export default App;

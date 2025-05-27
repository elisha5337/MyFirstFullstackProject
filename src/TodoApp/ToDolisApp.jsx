import React, { useState } from "react";
import "../App";
import { Link } from "react-router";

function ToDolisApp() {
  const [list, setList] = useState([]);
  const [inputValue, setInputValue] = useState("");
  function addList() {
    if (inputValue.trim()) {
      setList([...list, inputValue]);
      setInputValue("");
    }
  }
  function Delete(index) {
    const newList = list.filter((_, i) => i !== index);
    setList(newList);
  }
  function Edit(){

    return inputValue
  }
  return (
    <div className="text-center">
      <input
        type="text"
        value={inputValue}
        placeholder="Add new task..."
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button onClick={addList}>Add</button>
      <div className="text-center">
        <ol className="list">
          {list?.map((item, i) => (
            <li key={i}>
              {item}{" "}
              <button
                className="btn btn-dark btn-outline-danger Edit"
                onClick={() => Delete(i)}
              >
                delete
              </button>
              <button onClick={()=>{
               return <input>here{inputValue}</input>
              }}
               className=" Edit btn btn-secondary">Edit</button>
            </li>
          ))}
        </ol>
      </div>
      <div className="text-center">
        <Link to="/" className="btn btn-primary back">
          Go Back To Home
        </Link>
      </div>
    </div>
  );
}
//   const [todos, setTodos] = useState([]);
//   const [inputValue, setInputValue] = useState('');

//   const addTodo = () => {
//     if (inputValue.trim() === '') return; // Prevent adding empty todos
//     setTodos([...todos, { text: inputValue, completed: false }]);
//     setInputValue('');
//   };

//   const toggleComplete = (index) => {
//     const newTodos = [...todos];
//     newTodos[index].completed = !newTodos[index].completed;
//     setTodos(newTodos);
//   };

//   const deleteTodo = (index) => {
//     const newTodos = todos.filter((_, i) => i !== index);
//     setTodos(newTodos);
//   };

//   return (
//     <div className="App">
//       <ToDolisApp/>
//       <input
//         type="text"
//         value={inputValue}
//         onChange={(e) => setInputValue(e.target.value)}
//         placeholder="Add a new task..."
//       />
//       <button onClick={addTodo}>Add Todo</button>
//       <ul>
//         {todos.map((todo, index) => (
//           <li key={index} className={todo.completed ? 'completed' : ''}>
//             <span onClick={() => toggleComplete(index)}>{todo.text}</span>
//             <button onClick={() => deleteTodo(index)}>Delete</button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

export default ToDolisApp;

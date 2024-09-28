import React, { useState } from 'react';
import '../styles/Form.css';
import { MdEditNote } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { FaSave } from "react-icons/fa";

function Form() {
    const [todos, setTodos] = useState([]);
    const [newTodo, setNewTodo] = useState('');
    const [editIndex, setEditIndex] = useState(null);
    const [editText, setEditText] = useState('');
  
    const addTodo = () => {
      if (newTodo.trim() !== '') {
        setTodos([...todos, newTodo]);
        setNewTodo('');
      }
    };
  
    const deleteTodo = (index) => {
      const newTodos = todos.filter((_, i) => i !== index);
      setTodos(newTodos);
    };
  
    const editTodo = (index) => {
      setEditIndex(index);
      setEditText(todos[index]);
    };
  
    const saveEdit = (index) => {
      const newTodos = todos.map((todo, i) => (i === index ? editText : todo));
      setTodos(newTodos);
      setEditIndex(null);
      setEditText('');
    };
  return (
    <div className="container">
      <h1>To-do</h1>
      <div className="input-container">
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="Add a new to-do"
        />
        <button onClick={addTodo}>Add</button>
      </div>
      <ul className="todo-list">
        {todos.map((todo, index) => (
          <li key={index} className="todo-item" style={{ backgroundColor: '#f0f0f0' }}>
            {editIndex === index ? (
              <div>
                <input
                  type="text"
                  value={editText}
                  onChange={(e) => setEditText(e.target.value)}
                />
                <button onClick={() => saveEdit(index)}><FaSave />
                </button>
              </div>
            ) : (
              <div>
                {todo}
                <button onClick={() => editTodo(index)}><MdEditNote />
                </button>
                <button onClick={() => deleteTodo(index)}><MdDelete />
                </button>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Form
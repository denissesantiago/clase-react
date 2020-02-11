import React, { useState } from 'react';
import "./todoForm.css";

const TodoForm = ({ addTodo }) => {
    const [todo, setTodo] = useState("");
   
    const handleChange = event => {
        setTodo(event.target.value);
      };
    
      const handleKeydown = event => {
        if (event.keyCode === 13) {
            
            addTodo (todo);
          setTodo("");
        }
      };
    
    const handleSubmit = event => {
      event.preventDefault();
    };

    return (
        <form className="todo-form" onSubmit={handleSubmit}>
        <input 
        type="text" 
        placeholder="What needs to be done?" 
        className="todo-input"
        onChange={handleChange}
        onKeyDown={handleKeydown}
        value= {todo}
        />
        <button>  </button>
       </form>
    ) ;
};

export default TodoForm; 


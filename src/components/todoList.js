import React from 'react';
import "./todoList.css";

const todoList = ({ todos }) => {
    return (
        <ul className="list-tareas">
        {todos.map((item, index) => {
          return <li key={index}> {item} </li>;
        })
        }
      </ul>
    );
};

export default todoList;

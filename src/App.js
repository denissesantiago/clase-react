import React, {useState} from "react";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import TodoForm from './components/todoForm.js';
import TodoList from './components/todoList.js';
import "./App.css";


const App = () => {
  return (
    <BrowserRouter>
      <header>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/login">Login</Link>
        </nav>
      </header>
      <Switch>
        <Route exact path="/" component={TodoApp} />
        <Route exact path="/login" component={Login} /> 
      </Switch>
    </BrowserRouter>
  )
}

const Login = () => <h1>Login</h1>;



const TodoApp = () => {

  const [todoList, setTodoList] = useState([]);

const addTodo = todo => {
  const newTodoList = [todo, ...todoList];
  setTodoList(newTodoList);
};

  return (
    <div className="container">
        <h1 className="title" >todos</h1>
        <TodoForm addTodo={addTodo} />
        <TodoList todos={todoList} />
    </div>
  );
};

export default App;
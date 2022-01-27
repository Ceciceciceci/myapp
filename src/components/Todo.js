import React, {useState, useEffect} from 'react';
import TodoItem from './TodoItem';
import TodoForm from './TodoForm';

export default function Todo(){

  const [todos, setTodos] = React.useState([
    {
      text: "Learn about React",
      isCompleted: true
    },
    {
      text: "Make a Todo App",
      isCompleted: false
    },
    {
      text: "Make Todo App using Hooks",
      isCompleted: false
    },
    {
      text: "Make a shopping page",
      isCompleted: false
    },
    {
      text: "Make a shopping cart",
      isCompleted: false
    },
    {
      text: "Project uses Hooks",
      isCompleted: false
    },
    {
      text: "Project handles events",
      isCompleted: false
    },
    {
      text: "Project lifts state up",
      isCompleted: false
    },
    {
      text: "Project uses redux",
      isCompleted: false
    }
  ]);

  const addTodo = (text) =>{
    const newTodos = [...todos, {text}];
    setTodos(newTodos)
  }

  const removeTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  }

  const completeTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = !newTodos[index].isCompleted;
    setTodos(newTodos);
  }

  return (
    <div className="todo-list">
      <div className="all-todos">

      </div>
      <div className="active-todos">

      </div>
      <div className="completed-todos">
        
      </div>
      {todos.map((todo, index) => (
        <TodoItem
          key={index}
          index={index}
          todo={todo}
          completeTodo={completeTodo}
          removeTodo={removeTodo}
        />
      ))}
      <TodoForm addTodo={addTodo} />
    </div>
  )
}
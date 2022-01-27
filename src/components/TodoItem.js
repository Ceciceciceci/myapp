import React from 'react';

export default function TodoItem(props){
  const {index, todo, completeTodo, removeTodo} = props;
  
  return(
    <div className="todo" style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}>
      {todo.text}

      <div>
        {todo.isCompleted ? 
          <>
            <button onClick={() => completeTodo(index)}>Uncomplete</button>
            <button onClick={() => removeTodo(index)}>x</button>
          </>
        : 
          <>
            <button onClick={() => completeTodo(index)}>Complete</button>
          </>
        }
      </div>
    </div>
  )
}
import React from 'react';

export default function TodoForm(props){

  const {addTodo} = props;
  const [value, setValue] = React.useState("");

  const handleSubmit = e => {
    e.preventDefault();
    if (!value) return;
    addTodo(value);
    setValue("");
  };

  return (
    <div className="todoForm">
      <form onSubmit={handleSubmit}>
        <input type="text" className="input" value={value} onChange={e => setValue(e.target.value)} />
      </form>
    </div>
  )
}
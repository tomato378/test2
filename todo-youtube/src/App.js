import React, { useState } from 'react';
import Todolist from './Todolist';

const App = () => {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const addTodo = () => {
    if (inputValue) {
      setTodos([...todos, inputValue]);
      setInputValue('');
    }
  };

  return (
    <div>
      <h1>TODOリスト</h1>
      <input 
        type="text" 
        value={inputValue} 
        onChange={(e) => setInputValue(e.target.value)} 
        placeholder="タスクを追加"
      />
      <button onClick={addTodo}>追加</button>
      <Todolist todos={todos} />
    </div>
  );
};

export default App;
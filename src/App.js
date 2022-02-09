import React, { useState } from 'react';
import './index.css';
import Form from './components/Form';
import List from './components/List';

function App() {
  const [inputValue, setInputValue] = useState('');
  const [todos, setTodos] = useState([])

  return (
    <div className='App min-h-screen bg-gradient-to-r from-yellow-300 to-amber-400'>
      <Form inputValue={inputValue} setInputValue={setInputValue} todos={todos} setTodos={setTodos}/>
      <List />
    </div>
  );
}

export default App;

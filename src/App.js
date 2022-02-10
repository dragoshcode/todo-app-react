import React, { useState, useEffect } from 'react';
import './index.css';
import Form from './components/Form';
import List from './components/List';

function App() {
  const [inputValue, setInputValue] = useState('');
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState('all');
  const [filteredTodos, setFilteredTodos] = useState([]);

  useEffect(() => {
    getLocalTodos();
  }, []);

  useEffect(() => {
    handleFilter();
    saveLocalTodos();
  }, [todos, filter]);

  const handleFilter = () => {
    switch (filter) {
      case 'Completed':
        setFilteredTodos(todos.filter((todo) => todo.done === true));
        break;
      case 'Uncompleted':
        setFilteredTodos(todos.filter((todo) => todo.done === false));
        break;
      default:
        setFilteredTodos(todos);
        break;
    }
  };

  const saveLocalTodos = () => {
    localStorage.setItem('todos', JSON.stringify(todos));
  };

  const getLocalTodos = () => {
    if (localStorage.getItem('todos') === null) {
      localStorage.setItem('todos', JSON.stringify([]));
    } else {
      let todoLocal = JSON.parse(localStorage.getItem('todos'));
      setTodos(todoLocal);
    }
  };

  return (
    <div className='App min-h-screen bg-gradient-to-r from-yellow-300 to-amber-400 md:flex flex-col items-center'>
      <Form
        setFilteredTodos={setFilteredTodos}
        setFilter={setFilter}
        inputValue={inputValue}
        setInputValue={setInputValue}
        todos={todos}
        setTodos={setTodos}
      />
      <List filteredTodos={filteredTodos} setTodos={setTodos} todos={todos} />
    </div>
  );
}

export default App;

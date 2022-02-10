/* eslint-disable no-unused-vars */
import React from 'react';

function Form({ inputValue, setInputValue, todos, setTodos }) {
  const handleInputValue = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmitTodo = (e) => {
    e.preventDefault();
    setTodos([
      ...todos,
      {
        text: inputValue,
        done: false,
        id: Math.floor(Math.random() * 5000),
      },
    ]);
    setInputValue('');
  };

  return (
    <div className='md:mt-40'>
      <div className='text-center'>
        <h1 className='pt-8 text-2xl'>Dragosh' Todo List</h1>
      </div>
      <div className='flex flex-col sm:flex-row items-center justify-center gap-4'>
      <form
        onSubmit={handleSubmitTodo}
        className='flex bg-white items-center mt-6'
      >
        <input
          onChange={handleInputValue}
          type='text'
          className='p-2 outline-none'
          value={inputValue}
        />
        <button>
          <i className='fa-solid fa-circle-plus mr-2 text-yellow-500 text-2xl hover:bg-yellow-200 p-2 w-full transition duration-300 '></i>
        </button>
      </form>
      <div>
        <select className='bg-white p-2 sm:mt-6'>
          <option value='All'>All</option>
          <option value='Completed'>Completed</option>
          <option value='Uncompleted'>Uncompleted</option>
        </select>
      </div>
      </div>
    </div>
  );
}

export default Form;

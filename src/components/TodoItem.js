import React from 'react';

function TodoItem({ text, todos, setTodos, todo }) {
  const handleDelete = () => {
    setTodos(todos.filter((e) => e.id !== todo.id));
  };
  const handleComplete

  return (
    <div className='flex justify-between items-center bg-white gap-4 mt-3'>
      <div>
        <li className='md:px-8'>{text}</li>
      </div>
      <div className='flex'>
        <button className='bg-green-400 p-2'>
          <i class='fa-solid fa-check text-white pointer-events-none'></i>
        </button>
        <button onClick={handleDelete} className='bg-red-400 p-2'>
          <i class='fa-solid fa-delete-left text-white pointer-events-none'></i>
        </button>
      </div>
    </div>
  );
}

export default TodoItem;

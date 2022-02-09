import React from 'react';

function TodoItem({ text }) {
  return (
    <div className='flex justify-between bg-white gap-4'>
      <li style={{maxWidth: '70%'}}>{text}</li>
      <div>
        <button>
          <i class='fa-solid fa-check'></i>
        </button>
        <button>
          <i class='fa-solid fa-delete-left'></i>
        </button>
      </div>
    </div>
  );
}

export default TodoItem;

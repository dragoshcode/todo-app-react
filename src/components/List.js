import React from 'react';
import TodoItem from './TodoItem';

function List({ todos }) {
  return (
    <div className='mt-10'>
      <ul className='w-1/2 mx-auto'>
        {todos.map((todo) => (
          <TodoItem text={todo.text} />
        ))}
      </ul>
    </div>
  );
}

export default List;

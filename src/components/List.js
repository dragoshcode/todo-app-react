import React from 'react';
import TodoItem from './TodoItem';

function List({ todos, setTodos, filteredTodos }) {
  return (
    <div className='mt-10'>
      <ul className='w-2/3 md:w-full mx-auto max-w-md'>
        {filteredTodos.map((todo) => (
          <TodoItem todo={todo} setTodos={setTodos} todos={todos} key={todo.id} text={todo.text} />
        ))}
      </ul>
    </div>
  );
}

export default List;

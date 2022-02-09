import React, { useState } from 'react';

function Form() {
  return (
    <div className='flex flex-col sm:flex-row  items-center justify-center gap-4'>
      <div className='flex bg-white items-center mt-6'>
        <input type='text' className='p-2 outline-none' />
        <button>
          <i className='fa-solid fa-circle-plus mr-2 text-yellow-500 text-2xl hover:bg-yellow-200 p-2 w-full transition duration-300 '></i>
        </button>
      </div>
      <div>
        <select className='bg-white p-2 sm:mt-6'>
          <option value='All'>All</option>
          <option value='Completed'>Completed</option>
          <option value='Uncompleted'>Uncompleted</option>
        </select>
      </div>
    </div>
  );
}

export default Form;

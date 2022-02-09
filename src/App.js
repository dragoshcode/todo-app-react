import React from 'react';
import './index.css';
import Form from './components/Form';
import List from './components/List'

function App() {
  return (
    <div className='App min-h-screen bg-gradient-to-r from-yellow-300 to-amber-400'>
      <Form />
      <List />
    </div>
  );
}

export default App;

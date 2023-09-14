import React from 'react';
import TodoList from './home';
import './App.css';

function App() {
  return (
    <div className="home">
      <h1>My Todo List</h1>
      <hr></hr>
      <TodoList />
    </div>
  );
}

export default App;

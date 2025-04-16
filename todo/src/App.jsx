// App.js
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTask, toggleTask, deleteTask, nextTask, prevTask } from './store';
import './App.css'

const App = () => {
  const [input, setInput] = useState('');
  const tasks = useSelector((state) => state.tasks.list);
  const currentId = useSelector((state) => state.tasks.current);
  const current = tasks[currentId];
  const dispatch = useDispatch();

  const handleAdd = () => {
    if (input.trim()) {
      dispatch(addTask(input));
      setInput('');
    }
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h2>📝 Linked List Todo App</h2>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Add new task..."
      />
      <button onClick={handleAdd}>Add</button>

      <div style={{ marginTop: '20px' }}>
        {current ? (
          <>
            <h3>{current.text}</h3>
            <p>Status: {current.completed ? '✅ Completed' : '❌ Incomplete'}</p>
            <button onClick={() => dispatch(toggleTask())}>Toggle</button>
            <button onClick={() => dispatch(deleteTask())}>Delete</button>
          </>
        ) : (
          <p>No tasks</p>
        )}

        <div style={{ marginTop: '10px' }}>
          <button onClick={() => dispatch(prevTask())} disabled={!current?.prev}>⬅️ Prev</button>
          <button onClick={() => dispatch(nextTask())} disabled={!current?.next}>Next ➡️</button>
        </div>
      </div>
    </div>
  );
};

export default App;

// Want to Add Later?
// localStorage persistence?

// Task counter or list view?

// DSA enhancements (stack for undo, priority queue, etc.)?
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTask, toggleTask, deleteTask, nextTask, prevTask } from './store';
import Tabs from './components/Tabs';
import './App.css'
const App = () => {
  const [input, setInput] = useState('');
  const [showModal, setShowModal] = useState(false);

  const dispatch = useDispatch();
  const currentId = useSelector((state) => state.tasks.current);
  const tasks = useSelector((state) => state.tasks.list);
  const current = tasks[currentId];

  let all = [];
  let temp = currentId;
  let seen = new Set();

  while (temp !== null && !seen.has(temp)) {
    all.push({ id: temp, ...tasks[temp] });
    seen.add(temp);
    temp = tasks[temp]?.next;
  }

  const completed = all.filter(t => t.completed);
  const incompleted = all.filter(t => !t.completed);

  const add = () => {
    if (input.trim()) {
      dispatch(addTask(input));
      setInput('');
      setShowModal(true);
    }
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>Todo App 🚀</h2>
      <input value={input} onChange={e => setInput(e.target.value)} placeholder="Write task..." />
      <button onClick={add}>Add</button>

      <div style={{ marginTop: 20 }}>
        {current ? (
          <>
            <h3>{current.text}</h3>
            <p>{current.completed ? '✅ Done' : '❌ Not Done'}</p>
            <button onClick={() => dispatch(toggleTask())}>Toggle</button>
            <button onClick={() => dispatch(deleteTask())}>Delete</button>
          </>
        ) : (
          <p>No tasks</p>
        )}

        <div>
          <button onClick={() => dispatch(prevTask())} disabled={!current?.prev}>⬅️</button>
          <button onClick={() => dispatch(nextTask())} disabled={!current?.next}>➡️</button>
        </div>
      </div>

        <Tabs showModal={showModal} setShowModal={setShowModal}/>
    </div>
  );
};

export default App;
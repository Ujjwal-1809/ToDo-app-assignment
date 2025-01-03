import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { TaskContext } from './TaskContext';

const AddTask = () => {
  const [title, setTitle] = useState('');
  const { addTask } = useContext(TaskContext); // Access addTask from context
  const navigate = useNavigate();

  const handleAddTask = () => {
    if (title.trim()) { // Ensures that empty task should not be added.
      const newTask = { id: Date.now(), title, completed: false }; // Create new task
      addTask(newTask); // Add task using context
      navigate('/'); // Redirect to Home Page
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter" && title.trim() !== "") {
      handleAddTask()
    }
  }

  return (
    <div className='h-screen w-[100%] flex justify-center items-center'>
      <div className='bg-slate-700 text-white w-[60%] h-[40%] flex flex-col justify-center items-center gap-y-7 rounded-xl todobox'>
        <h1 className='text-4xl font-bold'>Add Task</h1>
        <input
          className='w-[70%] h-[17%] outline-none text-black pl-4 rounded-xl text-xl font-bold'
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          onKeyDown={handleKeyPress}
          placeholder="Enter task title"
          spellCheck='false'
        />
        <button className="border-2 p-1 w-[19%] font-bold h-[16%] text-center self-center hover:bg-white hover:text-black"
          onClick={handleAddTask}>
          Add <i class="fa-solid fa-plus"></i>
        </button>
      </div>
    </div>
  );
};

export default AddTask;

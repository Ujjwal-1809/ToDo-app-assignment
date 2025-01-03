import React, { useContext, useState } from 'react';
import { TaskContext } from './TaskContext';
import { useNavigate } from 'react-router-dom';
import './EditTask.css'

const EditTask = () => {
  const { tasks, setTasks } = useContext(TaskContext);
  const navigate = useNavigate();

  // Temporary state to hold edits
  const [tempTasks, setTempTasks] = useState([...tasks]);

  const handleEdit = (id, updatedTask) => {
    // Update the task in the tempTasks array
    const updatedTempTasks = tempTasks.map((task) =>
      task.id === id ? { ...task, ...updatedTask } : task
    );
    setTempTasks(updatedTempTasks);
  };

  const handleSave = () => {
    // Filter out tasks with empty titles
    const validTasks = tempTasks.filter((task) => task.title.trim() !== '');
    setTasks(validTasks); // Update the main task state
    navigate('/'); // Navigate back to Home Page
  };

  return (
    <div className='mt-8 w-[100%] flex justify-center items-center'>
      <div className='rounded-xl p-6 h-[80%] w-[70%] bg-slate-500 flex flex-col justify-center items-center gap-y-5 editbox'>
        <h1 className='text-white text-5xl font-bold text-center'>Edit Tasks</h1>
        <ul className='w-[100%]'>
          {tempTasks.map((task) => (
            <li key={task.id} className="mb-4 w-[100%] flex justify-center lists">
              <input
                type="text"
                value={task.title}
                onChange={(e) => handleEdit(task.id, { title: e.target.value })}
                className="editInput border-2 p-1 mr-2 w-[70%] outline-none font-bold rounded-lg"
                spellCheck='false'

              />
              <select
                value={task.completed ? 'completed' : 'pending'}
                onChange={(e) =>
                  handleEdit(task.id, { completed: e.target.value === 'completed' })
                }
                className={`editSelect border-2 p-1 outline-none font-bold ${task.completed ? 'text-green-600' : 'text-red-600'}`}
              >
                <option className='text-red-600' value="pending">Pending</option>
                <option className='text-green-600' value="completed">Completed</option>
              </select>

            </li>
          ))}
        </ul>
        <button onClick={handleSave} className="rounded-lg saveBtn border-2 p-1 w-[30%] h-[10%] text-center self-center hover:bg-white hover:text-black font-bold text-xl">
          Save Changes
        </button>
      </div>
    </div>
  );
};

export default EditTask;

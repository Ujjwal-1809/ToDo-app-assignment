import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { TaskContext } from './TaskContext';
import './Home.css';

const Home = () => {
  const { tasks, setTasks } = useContext(TaskContext); // Access tasks and setTasks from context
  document.body.style.backgroundColor = '#19222A';

  // Function to handle task deletion
  const handleDelete = (id) => {
    const updatedTasks = tasks.filter((task) => task.id !== id); // Filter out the task with the given id
    setTasks(updatedTasks); // Update the tasks state
  };

  return (
    <div className="flex justify-center items-center flex-col gap-y-5 m-6">
      <h1 className="text-6xl text-white">To-Do List</h1>

      <div className="bg-slate-700 text-white w-[60%] flex flex-col p-4 gap-y-4 rounded-xl todobox">
        <div className="grids header">
          <h1 className="text-2xl">Tasks</h1>
          <h1 className="text-2xl">Status</h1>
        </div>
        <div className="grids">
          {tasks.length > 0 ? (
            tasks.map((task) => (
              <React.Fragment key={task.id}>
                <div className="task-item">{task.title}</div>
                <div className="status-item">
                  {task.completed ? (
                    <div className="text-green-600">
                      Completed &nbsp; <i className="fa-solid fa-circle-check"></i>
                    </div>
                  ) : (
                    <div className="text-red-600">
                      Pending &nbsp; <i className="fa-solid fa-hourglass-half"></i>
                    </div>
                  )}
                </div>
                <div className="delete-item">
                  <button
                    onClick={() => handleDelete(task.id)}
                    className="delete-button text-slate-900 hover:text-slate-800 text-xl"
                  >
                    <i className="fa-solid fa-trash"></i>
                  </button>
                </div>
              </React.Fragment>
            ))
          ) : (
            <p className='text-2xl'>Add Tasks...</p> 
          )}
        </div>

        <div className="flex justify-center gap-x-4">
          <NavLink
            className="border-2 p-1 w-[30%] h-[10%] text-center self-center hover:bg-white hover:text-black"
            to="/add"
          >
            <button className="font-bold">
              Add Task &nbsp; <i className="fa-solid fa-plus"></i>
            </button>
          </NavLink>
          <NavLink
            className="border-2 p-1 w-[30%] h-[10%] text-center self-center hover:bg-white hover:text-black"
            to="/edit"
          >
            <button className="font-bold">
              Edit Task &nbsp; <i className="fa-solid fa-pen-to-square"></i>
            </button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Home;

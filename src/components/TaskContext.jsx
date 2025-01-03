import React, { createContext, useState, useEffect } from 'react';

// Create the context
export const TaskContext = createContext();

// Create a provider component
export const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]); // Initialize the tasks array
  const apiUrl = 'https://jsonplaceholder.typicode.com/todos';

  // Fetch default tasks from the API
  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await fetch(apiUrl);
        const jsonResponse = await response.json();
        setTasks(jsonResponse.slice(0, 5)); // Load only the first 5 tasks for simplicity
      } catch (error) {
        console.error('Error fetching tasks:', error);
      }
    };
    fetchTasks();
  }, []); // empty dependency so that the component renders only once

  // Function to add a new task
  const addTask = (newTask) => {
    setTasks([newTask, ...tasks]); // Add the new task to the beginning of the array
  };

  return (
    <TaskContext.Provider value={{ tasks, addTask, setTasks }}>
      {children}
    </TaskContext.Provider>
  );
};
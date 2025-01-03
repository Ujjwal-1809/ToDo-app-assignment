# To-Do List Manager

A simple and responsive To-Do List Manager built using **React.js**, **Context API** for state management, and **REST API** integration. This application allows users to view tasks fetched from an API, add new tasks, edit existing tasks, and delete tasks. It is designed to be intuitive and user-friendly.

---

## Features

- **Responsive Design**: Optimized for devices of all screen sizes.
- **Task Management**: Add, edit, delete, and view tasks with real-time updates.
- **API Integration**: Fetches default tasks from JSONPlaceholder.
- **Status Toggle**: Mark tasks as "Completed" or "Pending."
- **Keyboard Shortcuts**: Use the Enter key to add tasks quickly.

---

## Project Demo

The project is deployed and can be accessed at: [Live Demo](https://my-todo-app-assignment.netlify.app/)  

---

## Technologies Used

- **React.js**
- **Context API**
- **Tailwind CSS**
- **REST API**

---

## Installation and Running the Project

Follow these steps to set up and run the project locally:

### Prerequisites

- Node.js and npm installed on your system.
- A code editor like VS Code.

### Steps

1. **Clone the Repository**:
    ```bash
    git clone (https://github.com/Ujjwal-1809/ToDo-app-assignment.git)
    cd ToDo-app-assignment
    ```

2. **Install Dependencies**:
    Install the required npm packages.
    ```bash
    npm install
    ```

3. **Start the Development Server**:
    Run the following command to start the application in development mode:
    ```bash
    npm start
    ```
    The application will be accessible at localhost in your browser.

4. **Build for Production**:
    To create a production-ready build, use the following command:
    ```bash
    npm run build
    ```
    This will generate a `build` folder with optimized static files.

---

## **API Integration**

This project fetches default tasks from the **JSONPlaceholder API**:

- **Endpoint:** [https://jsonplaceholder.typicode.com/todos](https://jsonplaceholder.typicode.com/todos)
- **Data:** Fetches the first 5 tasks for simplicity.

---

## **Instructions for Usage**

### **Home Page:**
- View the list of tasks along with their status.
- Click on **"Add Task"** to create a new task.
- Click on **"Edit Task"** to modify tasks.
- Click on **"Delete Icon"** to delete tasks.

### **Add Task:**
- Enter the task title in the input field.
- Press the **Enter** key or click the **"Add"** button to save the task.

### **Edit Task:**
- Modify the task title directly in the input field.
- Use the dropdown to toggle the status (**Completed** or **Pending**).
- Click on **"Save Changes"** to update tasks.
- Use the **delete icon** to remove a specific task.

---

## **Deployment**

This project is deployed using **[Netlify]**. 

### **To deploy your own version:**
1. Create a production build using:
   ```bash
   npm run build
   
2. Follow the instructions provided by your chosen deployment platform to host the static files in the build folder.

   ## **Author**

   - Ujjwal Sharma
   - For more information about me: [My_personal_portfolio](https://675206351d6ff11db877973f--ujjwal-personal-portfolio.netlify.app/)




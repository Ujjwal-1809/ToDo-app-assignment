import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Home from "./components/Home"
import AddTask from "./components/AddTask"
import EditTask from "./components/EditTask"
import { TaskProvider } from "./components/TaskContext"

const router = createBrowserRouter([
  {
    path:'/',
element: <Home/>
  },
  {
    path:'/add',
    element: <AddTask/>
  },
  {
    path:'/edit',
    element: <EditTask/>
  }
])

function App() {
return <TaskProvider>
  <RouterProvider router={router}/>
</TaskProvider>
}

export default App

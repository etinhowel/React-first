import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import TasksPage from './pages/TasksPage.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },	
  {
    path: '/detalhes',
    element: <TasksPage/>,
  }
   ]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)

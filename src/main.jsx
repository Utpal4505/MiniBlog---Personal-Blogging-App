import Add_blogs from '../pages/Add-blogs';
import Blogs from '../pages/Blogs';
import Home from '../pages/Home';
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([{
  path: '/',
  element: <App/>,
  children: [
    {
      path: "",
      element: <Home/>
    },
    {
      path: "/blogs",
      element: <Blogs/> 
    },
    {
      path: "/add-blogs",
      element: <Add_blogs/>
    }]
}])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)

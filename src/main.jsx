import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import USer from './components/USer.jsx';
import UserUpdate from './components/UserUpdate.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
  },
  {
    path: "/users",
    element: <USer></USer>,
    loader: () => fetch('http://localhost:5000/users')
  },
  {
    path: "/users/:id",
    element: <UserUpdate></UserUpdate>,
    loader: ({params}) => fetch(`http://localhost:5000/users/${params.id}`)
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />
)

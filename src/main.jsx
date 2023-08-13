import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Components/Home/Home';
import Providers from './Components/Providers/Providers';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <Providers>
   <RouterProvider router={router} />
   </Providers>
  </React.StrictMode>,
)

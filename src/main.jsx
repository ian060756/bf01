import React from 'react';
import ReactDom from "react-dom/client";
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Home from './page/Home.jsx';
import About from './page/About.jsx';
import Contact from './page/Contact.jsx';
import Menu from './page/Menu.jsx';

import './index.css'
const router = createBrowserRouter([
  {
  path:"/",
  element:<App/>,
  children:[
    {index:true,element:<Home/>},
    {path:"menu",element:<Menu/>},
    {path:"about",element:<About/>},
    {path:"contact",element:<Contact/>},
  
  ],
  },
]);
ReactDom.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)

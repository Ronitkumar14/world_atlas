import { useState } from 'react'
import Home  from "./pages/Home";
import About  from "./pages/About";
import Contact  from "./pages/Contact";
import Country  from "./pages/Country";
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import AppLayout from './components/layout/AppLayout'
import CountryDetails from './components/layout/CountryDetails';
import ErrorPage from './pages/ErrorPage';

function App() {
 
  const router=createBrowserRouter([
    {
      path:"/",
      element:<AppLayout/>,

      errorElement:<ErrorPage/>,
      children:[
        {
          path:"/",
          element:<Home/>,
        },
        {
          path:"/about",
          element:<About/>
        },
        {
          path:"/country",
          element:<Country/>
        },
        {
          path:"/contact",
          element:<Contact/>
        },
        {
          path:"/country/:countryName",
          element:<CountryDetails/>
        }

      ]

    }
  ])
  return <RouterProvider router={router}/>
   
  
}

export default App

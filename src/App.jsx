import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import AppLayout from './Components/Navbar/Pages/AppLayout';
import Home from './Components/Navbar/UI/Home';
import TopRated from './Components/Navbar/UI/TopRated';
import KidsWear from './Components/Navbar/UI/KidsWear';
import MensWear from './Components/Navbar/UI/MensWear';
import Electronics from './Components/Navbar/UI/Electronics';
import TrendingProduct from './Components/Navbar/UI/TrendingProduct';
import Error from './Components/Navbar/Pages/ErrorPages';


const App = () => {

  const Router = createBrowserRouter([
    {
      Path: "/",
      element: <AppLayout/>,
      errorElement:<Error/>,
      children:[
        {
          path:"/",
          element:<Home/>,
        },
        {
          path:"/topRated",
          element:<TopRated/>
        },
        {
          path:"/kids",
          element: <KidsWear/>
        },
        {
          path:"/mens",
          element:<MensWear/>
        },
        {
          path:"/electronics",
          element:<Electronics/>
        },
        {
          path:"/trending",
          element:<TrendingProduct/>
        },
      ]
    }
  ])
  return (
    <>
       <RouterProvider router={Router} />
    </>
  )
}

export default App

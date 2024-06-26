import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './Components/Layout'
import Home from './Pages/Home'
import About from './Pages/About'
import Menu from './Pages/Menu'
import Blog from './Pages/Blog'
import Contact from './Pages/Contact'
import Shop from './Pages/Shop'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Reserve from './Pages/Reserve'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// routing
const router=createBrowserRouter([
  {
    path : '/',
    element : <Layout/>,
    children : [
      {
        path : '',
        element : <Home/>,
      },
      {
        path : 'about',
        element: <About/>,
      },
      {
        path : 'menu',
        element : <Menu/>,
      },
      {
        path : 'blog',
        element : <Blog/>,
      },
      {
        path : 'reserve',
        element : <Reserve/>,
      },
      {
        path : 'contact',
        element : <Contact/>
      },
      {
        path: 'shop',
        element: <Shop/>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)

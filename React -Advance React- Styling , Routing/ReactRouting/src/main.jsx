import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import 'tailwindcss/tailwind.css'
import {Routes, Route, BrowserRouter} from 'react-router-dom'
import Layout from './Components/Layout'
import About from './Pages/SubNav/About'
import Home from './Pages/Nav/Home'
import MyAccount from './Pages/SubNav/MyAccount'
import Shop from './Pages/Nav/Shop'
import Wishlist from './Pages/SubNav/Wishlist'
import Fruits from './Pages/Nav/Fruits'
import Beverages from './Pages/Nav/Beverages'
import Blog from './Pages/Nav/Blog'
import Contact from './Pages/Nav/Contact'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<Home/>}/>
          <Route path='shop' element={<Shop/>}/>
          <Route path='about' element={<About/>}/>
          <Route path='Fruits' element={<Fruits/>}/>
          <Route path='beverages' element={<Beverages/>}/>
          <Route path='blog' element={<Blog/>}/>
          <Route path='contact' element={<Contact/>}/>
          <Route path='account' element={<MyAccount/>}/>
          <Route path='wishlist' element={<Wishlist/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)

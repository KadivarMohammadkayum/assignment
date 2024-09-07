import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import Store from './Store'
import Contect from './Components/Contect'
import About from './Components/About'
import Services from './Components/Services'
import Layout from './Pages/Layout'
import Home from './Components/Home'



export default function App() {
  return (
    <>
     <Provider store={Store}>
      <Router>
        <Routes>
          <Route path='/' element={<Layout />} >
            <Route index element={<Home/>}/>
            <Route path='/contect' element={<Contect/>}/>
            <Route path='/About' element={<About/>}/>
            <Route path='/services' element={<Services/>}/>
          </Route>
        </Routes>
      </Router>   
     </Provider>

    </>
  )
}
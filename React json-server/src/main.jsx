import React from "react";
import ReactDOM from "react-dom/client"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import Home from "./Components/Home"
import InputData from "./Components/InputData";
import ManageData from "./Components/ManageData";
import './index.css'
import ErrorPage from "./Components/ErrorPage";



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App/>}>
          <Route index element={<Home/>}/>
          <Route path="input" element={<InputData/>}/>
          <Route path="manage" element={<ManageData/>}/>
          <Route path="*" element={<ErrorPage/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
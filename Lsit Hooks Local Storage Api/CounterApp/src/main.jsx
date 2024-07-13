import React from "react";
import ReactDom from 'react-dom/client'
import Counter from "./Counter";

ReactDom.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Counter/>
  </React.StrictMode>
)
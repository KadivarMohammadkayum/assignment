import React from "react";
import ReactDom from "react-dom/client"
import Functionalcom from "./Components/Functionalcom";
import Classcom from "./Components/Classcom";

ReactDom.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <Functionalcom/>
        <Classcom/>
    </React.StrictMode>
)
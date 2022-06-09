import React from "react"
import { useState } from "react"
import Navbar from "./components/Navbar"
import Main from "./components/Main"
import "./style.css";
export default function App() {

  const [darkMode,setdarkMode]=useState(true);
  const toggleDarkMode = ()=>{
    setdarkMode(prevdarkmode=>!prevdarkmode)
  }
    return (
        <div className="container">
            <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
            <Main  darkMode={darkMode} />
        </div>
    )
}
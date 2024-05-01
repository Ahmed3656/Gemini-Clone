import React, { useState } from "react";

//import {BrowserRouter, Routes, Route, useLocation} from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import 'bootstrap'
import './style.css'
import './all.css'
import MainContainer from "./MainContainer";
import Sidebar from "./Sidebar";

function App() {
  const isSmallScreen = window.matchMedia("(max-width: 600px)").matches;
  
  const [extend, setExtend] = useState(false)
  return (
    <>
      <Sidebar extend = {extend} setExtend = {setExtend} isSmallScreen = {isSmallScreen}/>
      <MainContainer extend = {extend} setExtend = {setExtend} isSmallScreen = {isSmallScreen}/>
    </>
  );
}

export default App;

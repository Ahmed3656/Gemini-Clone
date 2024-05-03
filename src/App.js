import React, { useState } from "react";

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import 'bootstrap'
import './style.css'
import './all.css'
import MainContainer from "./MainContainer";
import Sidebar from "./Sidebar";
import ContextProvider from "./api/context";

function App() {
  const isSmallScreen = window.matchMedia("(max-width: 959px)").matches;
  
  const [extend, setExtend] = useState(false)
  const [lightTheme, setLightTheme] = useState(false)
  return (
    <ContextProvider>
      <Sidebar extend = {extend} setExtend = {setExtend} isSmallScreen = {isSmallScreen} lightTheme = {lightTheme} setLightTheme = {setLightTheme}/>
      <MainContainer extend = {extend} setExtend = {setExtend} isSmallScreen = {isSmallScreen} lightTheme = {lightTheme}/>
    </ContextProvider>
  );
}

export default App;
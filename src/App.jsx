import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Page from './page/Page'
import Login from  './component/Login'
import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./assets/style/index.scss";

function App() {
 
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login/>} />
          <Route path='/page' element={<Page />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

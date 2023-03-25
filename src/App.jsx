import './App.css'
import Page from './page/Page'
import Login from  './component/Login'
import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./assets/style/index.scss";
import DashboardManajemenAplikasi from './component/manajemen_aplikasi/DashboardManajemenAplikasi'

function App() {
 
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login/>} />
          <Route path='/page' element={<Page />} />
          <Route path='/dashboard_app' element={<DashboardManajemenAplikasi />}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

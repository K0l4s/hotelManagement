import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Sidebar from '../../components/sidebar/Sidebar'
import Branch from '../branch/Branch'
import './Router.css'
import Service from '../service/Service'
const Router = () => {
  return (
    <div>
        <Sidebar />
        <div className="main">
        <Routes>
            <Route path="/" element={<p>Hello</p>} />
            <Route path="branch" element={<Branch/>} />
            <Route path="dashboard" element={null} />
            <Route path="service" element={<Service/>} />
        </Routes>
        <div onClick={()=>window.scrollTo(0,0)} className="returnToTop">
        </div>
        </div>
    </div>
  )
}

export default Router
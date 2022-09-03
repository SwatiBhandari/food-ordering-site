import React from 'react'
import './Admin.css'
import Sidebar from './components/Sidebar'
import MainDash from './components/MainDash'

function Admin() {
  return (
    <div className='Admin'>
        <div className='AdminGlass'>
            <Sidebar />
            <MainDash />
        </div>
      
    </div>
  )
}

export default Admin

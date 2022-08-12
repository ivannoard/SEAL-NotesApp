import React from 'react'
import ComponentProfile from '../../../components/ComponentProfile'
import Navbar from '../../../components/navbar/Navbar'
import Sidebar from '../../../components/sidebar/Sidebar'

function Profile() {
  return (
    <div className='container'>
        <Navbar/>
        <div className='d-flex row gx-3'>
            <div className='col-3'>
                <Sidebar/>
            </div>
            <div className='col-9'>
                <ComponentProfile/>
            </div>
        </div>
    </div>
  )
}

export default Profile
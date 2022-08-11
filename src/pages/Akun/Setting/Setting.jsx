import React from 'react'
import ComponentSetting from '../../../components/ComponentSetting'
import Navbar from '../../../components/navbar/Navbar'
import Sidebar from '../../../components/sidebar/Sidebar'

function Setting() {
  return (
    <div className='container'>
        <Navbar/>
        <div className='d-flex'>
            <div className='col-3'>
                <Sidebar/>
            </div>
            <div className='col-9'>
                <ComponentSetting/>
            </div>
        </div>
    </div>
  )
}

export default Setting
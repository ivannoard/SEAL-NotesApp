import React from 'react'
import ComponentSetting from '../../../components/ComponentSetting'
import Navbar from '../../../components/navbar/Navbar'
import Sidebar from '../../../components/sidebar/Sidebar'

function Setting() {
  return (
    <div className='container'>
        <Navbar/>
        <div className='d-flex row gx-3'>
            <div className='col-lg-3 col-sm-12 col-md-12'>
                <Sidebar/>
            </div>
            <div className='col-lg-9 col-sm-12 col-md-12'>
                <ComponentSetting/>
            </div>
        </div>
    </div>
  )
}

export default Setting
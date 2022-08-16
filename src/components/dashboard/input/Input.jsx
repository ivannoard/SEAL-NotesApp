import './input.css'
import React from 'react'
import { BiSearchAlt } from "react-icons/bi";


const Input = () => {
  return (
    <div className="input-group d-flex align-items-center position-relative">
      <BiSearchAlt size={25} className='position-absolute' style={{ zIndex: 4, left: '8px', color: '#4164E3' }} />
      <input type="text" className="form-control rounded-pill py-2" placeholder="Cari Catatan" style={{ paddingLeft: '33px' }} />
    </div>
  )
}

export default Input
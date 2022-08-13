import './input.css'
import React from 'react'
import { BiSearchAlt } from "react-icons/bi";


const Input = () => {
  return (
    <div className="input-group">
      <input type="text" className="form-control rounded-pill" placeholder="Cari Catatan" />
    </div>
  )
}

export default Input
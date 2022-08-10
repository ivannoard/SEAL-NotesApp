import React from 'react'
import { BiDownArrow, BiPlusCircle } from "react-icons/bi";
const UtilsButton = () => {
  return (
    <div className="d-flex gap-2 sm-mt-3 justify-content-between mt-3 mt-md-0">
      <button type="button" className="btn btn-primary rounded-pill ms-md-auto ms-sm-0"><span className='me-1'><BiPlusCircle size={25} /></span>Tambah Kategori</button>
      <button type="button" className="btn btn-outline-primary rounded-pill">Sorting By <span><BiDownArrow /></span></button>
    </div>
  )
}

export default UtilsButton
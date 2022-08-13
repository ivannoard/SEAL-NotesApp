import React, { useState } from 'react'
import { BiDownArrow, BiPlusCircle } from "react-icons/bi";

const UtilsButton = () => {
  const [fields, setFields] = useState({
    judul: '',
    isi: ''
  })
  const id = false

  const handleChange = (e) => {
    const name = e.target.getAttribute('name')
    setFields({
      ...fields,
      [name]: e.target.value
    })
  }
  const handleAdd = (e) => {
    e.preventDefault()
    console.log(fields)
  }

  return (
    <>
      <div className="d-flex gap-2 sm-mt-3 justify-content-between mt-3 mt-md-0">
        <button type="button" className="btn btn-primary rounded-pill ms-md-auto ms-sm-0" data-bs-toggle="modal" data-bs-target="#modalkategori"><span className='me-1'><BiPlusCircle size={25} /></span>Tambah Kategori</button>
        <button type="button" className="btn btn-outline-primary rounded-pill">Sorting By <span><BiDownArrow /></span></button>
      </div>

      <div className="modal fade" id="modalkategori" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered modal-xl">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Tambah Kategori</h5>
              <div className='bg-danger rounded-circle position-relative' style={{ width: '25px', height: '25px' }}>
                <button type="button" className="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
            </div>
            <div className="modal-body">
              <div className="mb-3 px-md-3 px-sm-0">
                <label htmlFor="kategori" className="form-label text-primary">Nama Kategori</label>
                <input type="text" onChange={handleChange} className="form-control" name='kategori' id="kategori" aria-describedby="emailHelp" />
              </div>
              <div className="list-category px-md-3 px-sm-0">
                <p className='text-primary mb-2'>Daftar Kategori</p>
                <ul className="list-group">
                  <li className="list-group-item d-flex justify-content-between align-items-center">
                    <p>Kategori 1</p>
                    <p className="text-danger" style={{ cursor: 'pointer' }}>Hapus</p>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center">
                    <p>Kategori 2</p>
                    <p className="text-danger" style={{ cursor: 'pointer' }}>Hapus</p>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center">
                    <p>Kategori 3</p>
                    <p className="text-danger" style={{ cursor: 'pointer' }}>Hapus</p>
                  </li>
                </ul>
              </div>
            </div>
            <div className={`modal-footer d-flex ${id ? 'justify-content-between' : ''} align-items-center`}>
              {id && <p>August 10, 2022</p>}
              <div className="buttons d-flex gap-2">
                {id && <button type="submit" className="btn btn-outline-danger rounded-pill" onClick={handleAdd}>Hapus</button>}
                <button type="submit" className="btn btn-primary rounded-pill ms-auto" onClick={handleAdd}>Tambah</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default UtilsButton
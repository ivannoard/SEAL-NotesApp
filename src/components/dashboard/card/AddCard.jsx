import React from 'react'
import { useState } from 'react'
import filePlus from '../../../images/file-plus.png'
import './addcard.css'

const AddCard = () => {
  const [fields, setFields] = useState({
    judul: '',
    isi: ''
  })
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
  console.log(fields)
  return (
    <>
      <div className="card rounded-5 border-light" style={{ width: '312px', height: '327px', backgroundColor: '#E9E9E9', cursor: 'pointer' }} data-bs-toggle="modal" data-bs-target="#exampleModal">
        <div className="d-flex flex-column justify-content-center align-items-center h-100 w-100">
          <img src={filePlus} alt="" />
          <p className='text-secondary mt-2'>Tambah Catatan</p>
        </div>
      </div>

      <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Tambah Catatan</h5>
              <button type="button" className="btn-close rounded-circle text-white" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <form>
                <div className="mb-3">
                  <label htmlFor="judul" className="form-label">Judul</label>
                  <input type="text" onChange={handleChange} className="form-control" name='judul' id="judul" aria-describedby="emailHelp" />
                </div>
                <div>
                  <label htmlFor="isi" className="form-label">Isi</label>
                  <textarea name="isi" onChange={handleChange} id="" cols="30" rows="10"></textarea>
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button type="submit" className="btn btn-primary rounded-pill" onClick={handleAdd}>Tambah</button>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default AddCard
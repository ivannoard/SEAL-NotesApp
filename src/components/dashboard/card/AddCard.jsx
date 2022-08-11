import React from 'react'
import { useState } from 'react'
import filePlus from '../../../images/file-plus.png'
import './addcard.css'

const AddCard = () => {
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
      <div className="card card-add rounded-5 border-light" data-bs-toggle="modal" data-bs-target="#modaladd">
        <div className="d-flex flex-column justify-content-center align-items-center h-100 w-100">
          <img src={filePlus} alt="" />
          <p className='text-secondary mt-2'>Tambah Catatan</p>
        </div>
      </div>

      {/* modal */}
      <div className="modal fade" id="modaladd" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered modal-xl">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title fw-bold" id="exampleModalLabel">Tambah Catatan</h4>
              <div className='bg-danger rounded-circle position-relative' style={{ width: '25px', height: '25px' }}>
                <button type="button" className="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
            </div>
            <div className="modal-body">
              <form>
                <div className="mb-3">
                  <label htmlFor="judul" className="form-label text-purple">Judul</label>
                  <input type="text" onChange={handleChange} className="form-control" name='judul' id="judul" aria-describedby="emailHelp" />
                </div>
                <div>
                  <label htmlFor="isi" className="form-label text-purple">Isi</label>
                  <textarea name="isi" onChange={handleChange} id="" cols="30" rows="10"></textarea>
                </div>
              </form>
            </div>
            <div className={`modal-footer d-flex ${id ? 'justify-content-between' : ''} align-items-center`}>
              {id && <p>August 10, 2022</p>}
              <div className="buttons d-flex gap-2">
                {id && <button type="submit" className="btn btn-outline-danger rounded-pill" onClick={handleAdd}>Hapus</button>}
                <button type="submit" className="btn btn-purple rounded-pill ms-auto" onClick={handleAdd}>Tambah</button>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default AddCard
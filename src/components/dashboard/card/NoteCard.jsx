import axios from 'axios';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { BiPencil } from "react-icons/bi";
import { useNavigate } from 'react-router-dom';
import './notecard.css'

const NoteCard = ({ modalData, modalDataId, category, token }) => {

  const bgColor = ['#FEC871', '#FD9B71', '#E4ED8F', '#B491FA', '#E3ED90', '#00D3FD']
  const colorIndex = Math.floor(Math.random() * bgColor.length)
  // console.log(bgColor[colorIndex])
  const [fields, setFields] = useState()
  const navigate = useNavigate()

  const handleChange = (e) => {
    const name = e.target.getAttribute('name')
    setFields({
      ...fields,
      [name]: e.target.value
    })
  }
  const handleUpdate = (e) => {
    e.preventDefault()
    // console.log(token)
    const requestUpdate = axios.put(`https://notedapp-api.herokuapp.com/api/note/update/${modalDataId}`, {
      title: fields.judul,
      category_id: fields.kategori,
      content: fields.isi
    }, {
      headers: {
        'Authorization': 'Bearer ' + token
      }
    }).then(response => window.location.reload())
      .catch((e) => console.log(e))
  }
  const handleDelete = (e) => {
    e.preventDefault()
    const requestDelete = axios.delete(`http://notedapp-api.herokuapp.com/api/note/delete/${modalDataId}`, {
      headers: {
        'Authorization': 'Bearer ' + token
      }
    })
      .then(response => window.location.reload())
      .catch((e) => console.log(e))
  }

  const getCategory = category?.filter(item => item.id === modalData.category_id)[0]
  // console.log(modalData.user_id)
  // console.log(category.filter(item => item.user_id === modalData.user_id))

  return (
    <>
      <div className="card card-note rounded-5 border-light overflow-auto " style={{ backgroundColor: bgColor[colorIndex] }} >
        <div className="card-body">
          <div className="d-flex flex-column h-100 justify-content-between py-2">
            <div className="top">
              <p className="rounded-pill note-title bg-light px-2 py-1 mb-2">{getCategory?.name}</p>
              {/* <p>ID {modalDataId}</p> */}
              <p className="card-text fs-6">{modalData.content.slice(0, 180)} . . . </p>
            </div>
            <div className="bottom d-flex justify-content-between align-items-center">
              <p className='align-self-end pb-2'>August 10, 2022</p>
              <div style={{ background: '#161616', width: '47px', height: '47px', cursor: 'pointer' }} className='rounded-circle text-center d-flex justify-content-center align-items-center text-white' data-bs-toggle="modal" data-bs-target={`#modalupdate${modalDataId}`}>
                <BiPencil size={30} />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="modal fade" id={`modalupdate${modalDataId}`} tabIndex="-1" aria-labelledby={`#modalupdate${modalDataId}`} aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered modal-xl">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title fw-bold" id="exampleModalLabel">{modalData.title}</h4>
              <div className='bg-danger rounded-circle position-relative' style={{ width: '25px', height: '25px' }}>
                <button type="button" className="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
            </div>
            <div className="modal-body">
              <form>
                <div className="mb-3">
                  <label htmlFor="judul" className="form-label text-purple">Judul</label>
                  <input type="text" onChange={handleChange} className="form-control" name='judul' id="judul" aria-describedby="emailHelp" defaultValue={modalData.title} />
                </div>
                <div className='mb-2'>
                  <label htmlFor="kategori" className="form-label text-purple">Kategori</label>
                  <select onChange={handleChange} className="form-select shadow-none" name="kategori" id="kategori">
                    <option value='1'>Pilih Kategori</option>
                    {category?.filter(item => item.user_id === modalData.user_id).map(itemLoop => (
                      <option value={itemLoop?.id}>{itemLoop?.name}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label htmlFor="isi" className="form-label text-purple">Isi</label>
                  <textarea name="isi" defaultValue={modalData.content} onChange={handleChange} id="" cols="30" rows="10"></textarea>
                </div>
              </form>
            </div>
            <div className={`modal-footer d-flex ${modalDataId ? 'justify-content-between' : ''} align-items-center`}>
              {modalDataId && <p>August 10, 2022</p>}
              <div className="buttons d-flex gap-2">
                {modalDataId && <button type="submit" className="btn btn-outline-danger rounded-pill" onClick={handleDelete}>Hapus</button>}
                <button className="btn btn-purple rounded-pill ms-auto" onClick={handleUpdate}>Perbarui</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default NoteCard


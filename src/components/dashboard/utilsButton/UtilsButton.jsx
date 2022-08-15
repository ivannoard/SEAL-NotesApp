import axios from 'axios';
import jwtDecode from 'jwt-decode';
import React, { useEffect, useState } from 'react'
import { BiDownArrow, BiPlusCircle } from "react-icons/bi";
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const UtilsButton = () => {
  const [fields, setFields] = useState({})
  const [kategori, setKategori] = useState()
  const navigate = useNavigate()

  const id = false
  const user = useSelector(state => state.user.user)
  // userId
  const decodedIdUser = jwtDecode(user.token).sub
  // user token
  const userToken = user.token
  // get kategori
  const categories = kategori?.data?.data.filter(item => item.user_id === decodedIdUser)

  const handleChange = (e) => {
    const name = e.target.getAttribute('name')
    setFields({
      ...fields,
      [name]: e.target.value
    })
  }
  const handleAdd = (e) => {
    // e.preventDefault()
    const requestData = axios.post('https://notedapp-api.herokuapp.com/api/category/create', {
      user_id: decodedIdUser,
      name: fields.kategori
    }, {
      headers: {
        'Authorization': 'Bearer ' + userToken
      }
    }).then(response => navigate('/')).catch((e) => console.log(e))
  }

  useEffect(() => {
    const requestKategori = axios.get('https://notedapp-api.herokuapp.com/api/categories').then(response => setKategori(response))
  }, [])

  return (
    <>
      <div className="d-flex gap-2 sm-mt-3 justify-content-between mt-3 mt-md-0">
        <button type="button" className="btn btn-purple rounded-pill ms-md-auto ms-sm-0 py-2" data-bs-toggle="modal" data-bs-target="#modalkategori"><span className='me-1'><BiPlusCircle size={25} /></span>Tambah Kategori</button>
        <button type="button" className="btn btn-outline-purple rounded-pill py-2">Sorting By <span><BiDownArrow /></span></button>
      </div>

      {/* modal */}
      <div className="modal fade" id="modalkategori" tabIndex="-1" aria-labelledby="modalkategori" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered modal-xl">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title fw-bold" id="modalkategori">Tambah Kategori</h5>
              <div className='bg-danger rounded-circle position-relative' style={{ width: '25px', height: '25px' }}>
                <button type="button" className="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
            </div>
            <div className="modal-body">
              <div className="mb-3 px-md-3 px-sm-0">
                <label htmlFor="kategori" className="form-label text-purple">Nama Kategori</label>
                <input type="text" onChange={handleChange} className="form-control" name='kategori' id="kategori" aria-describedby="emailHelp" />
              </div>
              <div className="list-category px-md-3 px-sm-0">
                <p className='text-purple mb-2'>Daftar Kategori</p>
                <ul className="list-group">
                  {categories?.map(item => (
                    <li key={item.id} className="list-group-item d-flex justify-content-between align-items-center">
                      <p>{item.name}</p>
                      <p className="text-danger" style={{ cursor: 'pointer' }}>Hapus</p>
                    </li>
                  ))}

                </ul>
              </div>
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

export default UtilsButton
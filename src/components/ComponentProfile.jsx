import axios from 'axios';
import React, { useState } from 'react'
import { FaUserCircle } from "react-icons/fa";
import { useSelector } from 'react-redux';

function ComponentProfile() {
  const userData = useSelector(state => state.user.userData)
  const user = useSelector(state => state.user.user)
  const [file, setFile] = useState('')
  const [fields, setFields] = useState({})
  // console.log(fields)

  const handlePhoto = (e) => {
    e.preventDefault()
    // console.log(file.name)
    const uploadRequest = axios.post(`https://notedapp-api.herokuapp.com/api/user/upload/photo/${userData.data.user.id}`, {
      photo: file
    }, {
      headers: {
        'Authorization': 'Bearer ' + user.token,
        'Content-Type': 'multipart/form-data'
      }
    }).then(response => window.location.reload()).catch((e) => console.log('error: ', e))
  }

  function handleChange(e) {
    e.preventDefault()
    setFields(
      {
        ...fields,
        [e.target.getAttribute('name')]: e.target.value
      }
    )
  }

  const handleUpdate = (e) => {
    e.preventDefault()
    const updateRequest = axios.post(`https://notedapp-api.herokuapp.com/api/user/update/${userData.data.user.id}`, {
      email: fields.email,
      name: fields.name
    }, {
      headers: {
        'Authorization': 'Bearer ' + user.token,
        // 'Content-Type': 'x-www-form-urlencoded'
      }
    }).then(response => window.location.reload()).catch((e) => console.log(e))
  }

  // console.log(fields)


  return (
    <div className='border px-5 py-5 '>
      <div className='d-flex'>
        <form onSubmit={handlePhoto} className='d-flex' encType='multipart/form-data'>
          <div>
            <span className='me-1'>
              <label htmlFor="file">
                {file ? <img src={URL.createObjectURL(file)} alt={file.name} width='80px' height='80px' className='rounded-circle' style={{ cursor: 'pointer' }} /> : userData?.data?.user?.photo ? <img src={'http://notedapp-api.herokuapp.com/images/' + userData?.data?.user?.photo} alt={userData?.data?.user?.photo} width='80px' height='80px' className='rounded-circle' style={{ cursor: 'pointer' }} /> : <FaUserCircle size={80} style={{ cursor: 'pointer' }} />}
              </label>
            </span>
            <input
              type="file"
              id='file'
              style={{ display: 'none' }}
              onChange={(e) => setFile(e.target.files[0])}
            />
          </div>
          <div className='px-3'>
            <div>Foto Profile</div>
            <button type="submit" className='btn btn-outline-purple rounded-pill mt-2' >Unggah Foto</button>
          </div>
        </form>
      </div>
      <form className='py-3'>
        <div className="mb-3">
          <label className="form-label">Nama</label>
          <input name='name' onChange={handleChange} type="text" className="form-control rounded-pill" placeholder='Verdian' defaultValue={userData?.data?.user?.name} />
        </div>
        <div className="mb-3">
          <label className="form-label">Email address</label>
          <input name='email' onChange={handleChange} type="email" className="form-control rounded-pill" placeholder='Verdian123@gmail.com' defaultValue={userData?.data?.user?.email} />
        </div>
      </form>
      <div className='d-grid gap-2 col-4 mx-auto'>
        <button onClick={handleUpdate} className="btn btn-purple rounded-pill">Simpan</button>
      </div>
    </div>
  )
}

export default ComponentProfile
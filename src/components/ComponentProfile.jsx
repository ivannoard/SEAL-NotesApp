import React from 'react'
import { FaUserCircle } from "react-icons/fa";
import { useSelector } from 'react-redux';

function ComponentProfile() {
  const userData = useSelector(state => state.user.userData)
  console.log(userData)
  return (
    <div className='border px-5 py-5 '>
      <div className='d-flex'>
        <div><span className='me-1'><FaUserCircle size={80} /></span></div>
        <div className='px-3'>
          <div>Foto Profile</div>
          <div type="button" className='btn btn-outline-purple rounded-pill'>Unggah Foto</div>
        </div>
      </div>
      <form className='py-3'>
        <div className="mb-3">
          <label className="form-label">Nama</label>
          <input type="text" className="form-control rounded-pill" placeholder='Verdian' defaultValue={userData.data.user.name} />
        </div>
        <div className="mb-3">
          <label className="form-label">Email address</label>
          <input type="email" className="form-control rounded-pill" placeholder='Verdian123@gmail.com' defaultValue={userData.data.user.email} />
        </div>
        <div className="mb-3">
          <label className="form-label">Username</label>
          <input type="text" className="form-control rounded-pill" placeholder='Verdian' defaultValue={userData.data.user.name} />
        </div>
      </form>
      <div className='d-grid gap-2 col-4 mx-auto'>
        <button type="submit" className="btn btn-purple rounded-pill">Simpan</button>
      </div>
    </div>
  )
}

export default ComponentProfile
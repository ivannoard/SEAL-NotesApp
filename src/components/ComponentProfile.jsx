import React from 'react'
import { FaUserCircle } from "react-icons/fa";

function ComponentProfile() {
  return (
    <div>
        <div className='d-flex'>
            <div><span className='me-1'><FaUserCircle size={80}/></span></div>
            <div>
                <div>Foto Profile</div>
                <div type="button" className='btn btn-outline-primary rounded-pill'>Unggah Foto</div>
            </div>
        </div>
        <form>
        <div className="mb-3">
            <label className="form-label">Nama</label>
            <input type="text" className="form-control rounded-pill" placeholder='Verdian'/>
        </div>
        <div className="mb-3">
            <label className="form-label">Email address</label>
            <input type="email" className="form-control rounded-pill" placeholder='Verdian123@gmail.com'/>
        </div>
        <div className="mb-3">
            <label className="form-label">Username</label>
            <input type="text" className="form-control rounded-pill" placeholder='Verdian'/>
        </div>
        <button type="submit" className="btn btn-primary rounded-pill">Simpan</button>
        </form>
    </div>
  )
}

export default ComponentProfile
import React, { useState } from 'react'
import photo from '../../images/photo.jpg'
import logo from '../../images/logo.png'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { logoutUser } from '../../redux/actions/userAction'
import { FiLogOut } from "react-icons/fi";
import { BiUser } from "react-icons/bi";
const Navbar = () => {

  const [profileToggle, setProfileToggle] = useState(false)
  const navigate = useNavigate()
  const dispatch = useDispatch()
  function handleLogout(e) {
    e.preventDefault()
    localStorage.removeItem("user")
    dispatch(logoutUser())
  }

  return (
    <div className="Navbar">
      <div className="container py-3">
        <div className="d-flex align-items-center justify-content-between">
          <div className="left">
            <div className="logo d-flex align-items-center gap-1">
              <img src={logo} alt="logo" style={{ marginTop: '-15px' }} />
              <h4>QuickNoted.</h4>
            </div>
          </div>
          <div className="right position-relative" style={{ cursor: 'pointer' }} onClick={() => setProfileToggle(!profileToggle)}>
            <div className="profile d-flex align-items-center gap-2">
              <h6 className='username'>Verdian</h6>
              <img src={photo} alt="profile-img" width='50px' height='50px' className="rounded-circle" />
            </div>
            {/* toggle profile */}
            <div className="toggle position-absolute px-3 py-2 mt-2 rounded shadow-sm" style={{ display: profileToggle ? 'block' : 'none', background: 'white', zIndex: '5', width: '300px', right: 0 }}>
              <div className="d-flex flex-column gap-2">
                <span onClick={() => console.log('profile')}><BiUser className='text-primary' /> Profile</span>
                <span onClick={handleLogout} className='text-danger'><FiLogOut /> Logout</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
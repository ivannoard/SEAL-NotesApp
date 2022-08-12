import React from 'react'
import { Link } from "react-router-dom";
import { FiSettings, FiUser } from "react-icons/fi";

function Sidebar() {
  return (
    <div className='border'>
        <div>
            <Link to="/profile" style={{ textDecoration: "none" }}>
                <button type="button" className="btn"><span><FiUser /></span> Profile</button>
            </Link>
        </div>
        <div>
            <Link to="/setting" style={{ textDecoration: "none" }}>
                <button type="button" className="btn"><span><FiSettings /></span> Pengaturan</button>
            </Link>
        </div>
    </div>
  )
}

export default Sidebar
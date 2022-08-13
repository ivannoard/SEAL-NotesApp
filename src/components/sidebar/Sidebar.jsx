import React from 'react'
import { Link } from "react-router-dom";
import { FiSettings, FiUser } from "react-icons/fi";

function Sidebar() {
  return (
    <div className='border'>
        <ul className="list-group">
            <Link to="/profile" style={{ textDecoration: "none" }}>
                <li className="list-group-item"><span><FiUser /></span> Profile</li>
            </Link>
            <Link to="/setting" style={{ textDecoration: "none" }}>
                <li className="list-group-item"><span><FiSettings /></span> Pengaturan</li>
            </Link>       
        </ul>
    </div>
  )
}

export default Sidebar
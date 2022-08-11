import React from 'react'
import { Link } from "react-router-dom";
import { FiSettings, FiUser } from "react-icons/fi";

function Sidebar() {
  return (
    <div className=''>
        <ul>
            <Link to="/profile" style={{ textDecoration: "none" }}>
                <li>
                    <FiUser className='icon'/>
                    <span>Profile</span>
                </li>
            </Link>
            <Link to="/setting" style={{ textDecoration: "none" }}>
                <li>
                    <FiSettings className='icon'/>
                    <span>Pengaturan</span>
                </li>
            </Link>
        </ul>
    </div>
  )
}

export default Sidebar
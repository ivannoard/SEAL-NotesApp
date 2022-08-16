import React from 'react'
import { Link } from "react-router-dom";
import { FiSettings, FiUser } from "react-icons/fi";

function Sidebar() {
  return (
    <div className='border mb-3'>
      <ul className="list-group">
        <Link to="/profile" style={{ textDecoration: "none" }}>
          <li className="list-group-item list-group-item-action"><span><FiUser /></span> Profile</li>
        </Link>
        <Link to="/setting" style={{ textDecoration: "none" }}>
          <li className="list-group-item list-group-item-action"><span><FiSettings /></span> Pengaturan</li>
        </Link>
      </ul>
    </div>
  )
}

export default Sidebar
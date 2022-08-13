import React from 'react'
import { BiPencil } from "react-icons/bi";
import './notecard.css'

const NoteCard = () => {

  const bgColor = ['#FEC871', '#FD9B71', '#E4ED8F', '#B491FA', '#E3ED90', '#00D3FD']
  const colorIndex = Math.floor(Math.random() * bgColor.length)
  // console.log(bgColor[colorIndex])

  return (
    <div className="card card-note rounded-5 border-light overflow-auto" style={{ backgroundColor: bgColor[colorIndex] }}>
      <div className="card-body">
        <div className="d-flex flex-column h-100 justify-content-between py-2">
          <div className="top">
            <p className="rounded-pill note-title bg-light px-2 py-1 mb-2">Catatan Magang</p>
            <p className="card-text fs-6">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur voluptatum esse alias, ratione sed eaque adipisci cumque quasi eveniet harum!</p>
          </div>
          <div className="bottom d-flex justify-content-between align-items-center">
            <p className='align-self-end pb-2'>August 10, 2022</p>
            <div style={{ background: '#161616', width: '47px', height: '47px' }} className='rounded-circle text-center d-flex justify-content-center align-items-center text-white'>
              <BiPencil size={30} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NoteCard
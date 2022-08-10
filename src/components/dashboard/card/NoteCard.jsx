import React from 'react'
import { BiPencil } from "react-icons/bi";
const NoteCard = () => {
  return (
    <div className="card rounded-5 border-light overflow-auto" style={{ width: '312px', height: '327px', backgroundColor: '#FEC871' }}>
      <div className="card-body">
        <div className="d-flex flex-column h-100 justify-content-between">
          <div className="top">
            <p className="rounded-pill bg-light px-2 py-1" style={{ width: '60%' }}>Catatan Magang</p>
            <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat beatae perspiciatis earum adipisci eius labore autem eaque repellat dolor, ipsam libero hic voluptates, mollitia, commodi corrupti! Alias labore quisquam velit.</p>
          </div>
          <div className="bottom d-flex justify-content-between align-items-center">
            <p className='align-self-end'>August 10, 2022</p>
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
import { useSelector } from "react-redux"
import { Navigate } from "react-router-dom"
import Input from "../../components/dashboard/input/Input"
import UtilsButton from "../../components/dashboard/utilsButton/UtilsButton"
import Navbar from "../../components/navbar/Navbar"


import AddCard from "../../components/dashboard/card/AddCard"
import NoteCard from "../../components/dashboard/card/NoteCard"
import { useState } from "react"
import Modal from "../../components/dashboard/modal/Modal"

const Dashboard = () => {
  const user = useSelector(state => state.user.user)

  return (
    <>
      {user ? (
        <div className="Dashboard" style={{ minHeight: '100vh' }}>
          <Navbar />
          <div className="container">
            {/* Code Here */}
            {/* top */}
            <div className="row">
              <div className="col-md-6">
                <Input />
              </div>
              <div className="col-md-6">
                <UtilsButton />
              </div>
            </div>
            {/* bottom */}
            <div className="d-flex flex-wrap mt-4 gap-3 justify-content-center justify-content-md-start">
              <AddCard />
              <NoteCard />
              <NoteCard />
              <NoteCard />
              <NoteCard />
              <NoteCard />
              <NoteCard />
              <NoteCard />
              <NoteCard />
            </div>
          </div>
        </div>
      ) : <Navigate to='/login' />}
    </>
  )
}

export default Dashboard
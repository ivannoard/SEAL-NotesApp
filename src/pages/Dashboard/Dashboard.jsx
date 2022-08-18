import { useDispatch, useSelector } from "react-redux"
import { Navigate } from "react-router-dom"
import Input from "../../components/dashboard/input/Input"
import UtilsButton from "../../components/dashboard/utilsButton/UtilsButton"
import Navbar from "../../components/navbar/Navbar"
import AddCard from "../../components/dashboard/card/AddCard"
import NoteCard from "../../components/dashboard/card/NoteCard"
import { useEffect, useState } from "react"
import { getAllNotes } from "../../redux/actions/notesAction"
import jwtDecode from "jwt-decode"
import axios from "axios"
import { getUserData } from "../../redux/actions/userAction"

const Dashboard = () => {
  const user = useSelector(state => state.user.user)
  const notesData = useSelector(state => state.notes.notes)
  const [kategori, setKategori] = useState()
  const getCategory = kategori?.data?.data
  const dispatch = useDispatch()
  // userId
  const decodedIdUser = jwtDecode(user.token).sub
  // user token
  const userToken = user.token
  // filtered data
  const filteredData = notesData?.filter(item => item.user_id === decodedIdUser)

  useEffect(() => {
    if (notesData?.length < 1) dispatch(getAllNotes())
    const requestKategori = axios.get('https://notedapp-api.herokuapp.com/api/categories').then(response => setKategori(response))
  }, [notesData])

  // useEffect(() => {
  //   dispatch(getUserData(user.token))
  // }, [user, notesData])

  // console.log(notesData)

  return (
    <>
      {user ? (
        <div className="Dashboard" style={{ minHeight: '100vh' }}>
          <Navbar />
          <div className="container mt-md-5 ">
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
              {filteredData?.map((item) => (
                <NoteCard modalData={item} category={getCategory} modalDataId={item.id} key={item.id} token={userToken} />
              ))}
            </div>
          </div>
        </div>
      ) : <Navigate to='/login' />}
    </>
  )
}

export default Dashboard
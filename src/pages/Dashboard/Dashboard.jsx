import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Navigate, useNavigate } from "react-router-dom"
import { logoutUser } from "../../redux/actions/userAction"

const Dashboard = () => {
  const user = useSelector(state => state.user.user)
  console.log(user)
  const navigate = useNavigate()
  const dispatch = useDispatch()

  function handleLogout(e) {
    e.preventDefault()
    localStorage.removeItem("user")
    dispatch(logoutUser())
  }

  return (
    <>
      {user ? (
        <div className="Dashboard">
          <h1>Dashboard Component</h1>
          {/* Code Here */}
          <button onClick={handleLogout}>logout</button>
        </div>
      ) : <Navigate to='/login' />}
    </>
  )
}

export default Dashboard
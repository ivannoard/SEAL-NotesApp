import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { loginUser } from "../../redux/actions/userAction"

const Login = () => {
  const [fields, setFields] = useState({
    email: '',
    password: ''
  })
  const dispatch = useDispatch()
  const user = useSelector(state => state.user.user)
  const navigate = useNavigate()
  console.log(user)

  function handleChange(e) {
    e.preventDefault()
    setFields(
      {
        ...fields,
        [e.target.getAttribute('name')]: e.target.value
      }
    )
  }

  function handleLogin(e) {
    e.preventDefault()
    dispatch(loginUser(fields))
  }

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(user))
    if (user) return navigate('/') // middleware
  }, [user])

  return (
    <div className="Login">
      <h1>Login Component</h1>
      {/* Code Here */}
      <form onSubmit={handleLogin}>
        <input onChange={handleChange} type="email" name='email' placeholder="Email" />
        <input onChange={handleChange} type="password" name="password" placeholder="Password" />
        <button type="submit">Login</button>
      </form>
    </div>
  )
}

export default Login
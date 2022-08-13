import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link, useLocation, useNavigate } from "react-router-dom"
import { loginUser } from "../../redux/actions/userAction"
import logo from '../../images/logo.png'
import right from '../../images/right.png'
import './style.css'

const Login = () => {
  const imgStyle = {
    height: '100vh',
    background: `url(${right})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPositionY: 'center',
    zIndex: -10
  }

  // logic
  const [fields, setFields] = useState({
    email: '',
    password: ''
  })

  const dispatch = useDispatch()
  const user = useSelector(state => state.user.user)
  const navigate = useNavigate()

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

  console.log(user)

  return (
    <div className="Login">
      {/* <h1>Login Component</h1> */}
      {/* Code Here */}
      {/* <form onSubmit={handleLogin}>
        <input onChange={handleChange} type="email" name='email' placeholder="Email" />
        <input onChange={handleChange} type="password" name="password" placeholder="Password" />
        <button type="submit">Login</button>
      </form> */}
      <section className="auth container-fluid">
        <div className="row min-vh-100" >
          <div className="col-lg-6 left">
            <div className="row justify-content-center align-items-center h-100">
              <div className="col-md-8 col-10 form">
                <div className="header text-center">
                  <img src={logo} alt="" />
                  <h1 style={{ marginTop: '-15px' }}>QuickNoted.</h1>
                </div>
                <form onSubmit={handleLogin}>
                  <input type="email" name='email' onChange={handleChange} className="form-control mt-4" id="email" placeholder="Email" />

                  <input type="password" name="password" onChange={handleChange} className="form-control" id="password" placeholder="Kata Sandi" />

                  <button className="sign-in" type='submit'>Masuk</button>
                </form>
                <div className="form-check ms-2 my-2 d-flex justify-content-between">
                  <div className="checkbox">
                    <input type="checkbox" className="form-check-input mt-1" id="exampleCheck1" />
                    <label htmlFor="exampleCheck1" className="form-check-label">Ingat Saya</label>
                  </div>
                  <p><a href="#" className="text-decoration-none mb-5">Lupa Password?</a></p>
                </div>
                <div className="text-center pt-5">
                  <p>Belum Punya Akun? <Link to='/register'>Daftar disini</Link></p>
                </div>
              </div>

            </div>
          </div>
          <div className="col-lg-6 right d-lg-block position-absolute position-md-static top-0 start-o end-0 bottom-0" style={imgStyle}>
            <h5>Buat Catatan Cepatmu Sekarang Juga!</h5>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Login
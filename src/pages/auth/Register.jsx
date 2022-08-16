import axios from 'axios'
import { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import logo from '../../images/logo.png'
import right from '../../images/right.png'
import './style.css'
import cookies from 'js-cookie';

const Register = () => {
  const imgStyle = {
    height: '100vh',
    background: `url(${right})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPositionY: 'center',
    zIndex: -10
  }
  const [fields, setFields] = useState({})
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


  async function handleRegister(e) {
    e.preventDefault()
    const requestData = JSON.stringify(fields)
    /*
    const requestRegister = await axios.get('https://notedapp-api.herokuapp.com/api/sanctum/csrf-cookie')
      .then(response => {
        const data = response.data.slice(406, 480).split(' ')
        const csrfToken = data[2].split('=')[1].slice(1, -1)
        // const requestData = JSON.stringify(fields)
        // console.log('cookie, ', response.headers)
        return axios.post('http://notedapp-api.herokuapp.com/api/register', {
          "_token": csrfToken,
          name: fields.name,
          email: fields.email,
          password: fields.password,
          password_confirmation: fields.password_confirmation
        }, {
          headers: {
            'X-Requested-With': 'XMLHttpRequest',
            'X-CSRF-TOKEN': csrfToken
          },
          credentials: "include",
        }).then(response => console.log(response.headers["Set-Cookie"])).catch((e) => console.log('error: ', e))
        // const data = JSON.stringify(fields)
        // return axios.post('https://notedapp-api.herokuapp.com/api/register', data, {
        //   xsrfHeaderName: 'X-CSRF-Token',
        //   withCredentials: true
        // })
      })
      .catch((e) => console.log(e))
      */

    const requestRegister = await axios.post('https://notedapp-api.herokuapp.com/api/register', requestData,
      {
        headers: {
          'Accept': 'application/json',
          "Content-Type": "application/json",
          'xsrfHeaderName': 'X-CSRF-Token',
          'withCredentials': true
        }
      }).then(response => {
        navigate('/login', alert('silahkan login!'))
      }).catch((e) => console.log('error: ', e))

  }



  return (
    <div className="Register">
      {/* <h1>Register Component</h1> */}
      {/* Code Here */}
      <section className="auth container-fluid">
        <div className="row min-vh-100">
          <div className="col-lg-6 left">
            <div className="row justify-content-center align-items-center h-100">
              <div className="col-md-8 col-10 form">
                <div className="header text-center">
                  <img src={logo} alt="logo" />
                  <h1 style={{ marginTop: '-15px' }}>QuickNoted.</h1>
                </div>
                <div className="">
                  <form onSubmit={handleRegister}>
                    <input type="email" onChange={handleChange} name="email" className="form-control mt-4" id="email" placeholder="Email" />
                    <input type="text" onChange={handleChange} name="name" className="form-control mt-4" id="name" placeholder="Nama" />
                    <input type="password" onChange={handleChange} name="password" className="form-control" id="password" placeholder="Kata Sandi" />
                    <input type="password" onChange={handleChange} name="password_confirmation" className="form-control" id="confirm_password" placeholder="Ulangi Kata Sandi" />

                    <button type="submit" className="sign-in">Daftar</button>
                  </form>
                </div>
                <div className="form-check ms-2 my-2 d-flex justify-content-between">
                  <div className="checkbox">
                    <input type="checkbox" className="form-check-input mt-1" id="exampleCheck1" />
                    <label htmlFor="exampleCheck1" className="form-check-label">Ingat Saya</label>
                  </div>
                  <p><a href="" className="text-decoration-none mb-5">Lupa Password?</a></p>
                </div>
                <div className="text-center pt-5">
                  <p>Sudah Punya Akun? <Link to='/login'>Masuk disini</Link></p>
                </div>
              </div>

            </div>
          </div>
          <div className="col-lg-6 right d-lg-block position-absolute position-md-static top-0 start-o end-0 bottom-0" style={imgStyle}>
            <h5>Buat Catatan Cepatmu Sekarang Juga!</h5>
          </div>
        </div>
      </section >

    </div >
  )
}

export default Register
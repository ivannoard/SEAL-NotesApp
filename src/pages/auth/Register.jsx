import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../../images/logo.png'
import right from '../../images/right.png'
import './style.css'

const Register = () => {
  const imgStyle = {
    height: '100vh',
    background: `url(${right})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPositionY: 'center',
    zIndex: -10
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
                  <img src={logo} alt="" />
                  <h1 style={{ marginTop: '-15px' }}>QuickNoted.</h1>
                </div>
                <div className="">
                  <input type="email" className="form-control mt-4" id="email" placeholder="Email" />
                  <input type="text" className="form-control mt-4" id="name" placeholder="Nama" />
                  <input type="password" className="form-control" id="password" placeholder="Kata Sandi" />
                  <input type="password" className="form-control" id="password" placeholder="Ulangi Kata Sandi" />

                  <button className="sign-in">Masuk</button>
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
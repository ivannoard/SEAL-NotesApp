import React from 'react'
import { useSelector } from 'react-redux'
import { Routes, Route, Navigate } from 'react-router-dom'
import Login from './pages/auth/Login'
import Register from './pages/auth/Register'
import Dashboard from './pages/Dashboard/Dashboard'
import NotFound from './pages/NotFound/NotFound'
import './app.css'
import Profile from './pages/Akun/Profile/Profile'
import Setting from './pages/Akun/Setting/Setting'

function App() {
  const user = useSelector(state => state.user.user)
  const RequireAuth = ({ children }) => {
    return user !== null ? children : <Navigate to='/login' />
  }
  return (
    <Routes>
      <Route path='*' element={<NotFound />} />
      <Route path='/register' element={<Register />} />
      <Route path='/login' element={<Login />} />
      <Route path='/' exact element={<RequireAuth><Dashboard /></RequireAuth>} />
      <Route path='/profile' exact element={<RequireAuth><Profile /></RequireAuth>} />
      <Route path='/setting' exact element={<RequireAuth><Setting /></RequireAuth>} />
    </Routes>
  )
}

export default App;

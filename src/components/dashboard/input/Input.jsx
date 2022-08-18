import './input.css'
import React, { useEffect } from 'react'
import { BiSearchAlt } from "react-icons/bi";
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ActionTypes } from '../../../redux/constants/ActionTypes';
import axios from 'axios';

const Input = () => {
  const userData = useSelector(state => state.user.userData)
  const [field, setField] = useState()
  const dispatch = useDispatch()
  // user id
  const idUser = userData?.data.user.id

  useEffect(() => {
    const searchRequest = axios.get(`https://notedapp-api.herokuapp.com/api/notes?search=${field}`)
      .then(response => {
        const filteredSearch = response.data.data.filter(item => item.user_id === idUser)
        dispatch({ type: ActionTypes.FETCH_NOTES, payload: filteredSearch })
      })
      .catch((e) => console.log(e))
  }, [field])


  return (
    <div className="input-group d-flex align-items-center position-relative">
      <BiSearchAlt size={25} className='position-absolute' style={{ zIndex: 4, left: '8px', color: '#4164E3' }} />
      <input type="text" onChange={(e) => setField(e.target.value)} className="form-control rounded-pill py-2" placeholder="Cari Catatan" style={{ paddingLeft: '33px' }} />
    </div>
  )
}

export default Input
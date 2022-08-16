import axios from "axios";
import { ActionTypes } from "../constants/ActionTypes";

export const loginUser = (user) => {
  return {
    type: ActionTypes.LOGIN_USER,
    payload: user
  }
}
export const logoutUser = () => {
  return {
    type: ActionTypes.LOGOUT_USER,
    payload: null
  }
}
export const removeUserData = () => {
  return {
    type: ActionTypes.REMOVE_USER_DATA,
    payload: null
  }
}
export const getUserData = (token) => {
  return async function (dispatch) {
    const userRequest = await axios.get(`https://notedapp-api.herokuapp.com/api/user?token=${token}`)
      .then(response => dispatch({ type: ActionTypes.USER_DATA, payload: response }))
  }
}
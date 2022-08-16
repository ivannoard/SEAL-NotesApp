import { ActionTypes } from "../constants/ActionTypes";

const initialState = {
  user: JSON.parse(localStorage.getItem("user")) || null,
  userData: null
}

export const userReducer = (state = initialState, { type, payload }) => {
  switch (type) {

    case ActionTypes.LOGIN_USER:
      return { ...state, user: payload }
    case ActionTypes.LOGOUT_USER:
      return { ...state, user: null }
    case ActionTypes.USER_DATA:
      return { ...state, userData: payload }
    case ActionTypes.REMOVE_USER_DATA:
      return { ...state, userData: null }
    default:
      return state
  }
}
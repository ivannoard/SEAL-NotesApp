import { ActionTypes } from "../constants/ActionTypes";

const initialState = {
  user: JSON.parse(localStorage.getItem("user")) || null
}

export const userReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.LOGIN_USER:
      return { ...state, user: payload }
    case ActionTypes.LOGOUT_USER:
      return { ...state, user: null }
    default:
      return state
  }
}
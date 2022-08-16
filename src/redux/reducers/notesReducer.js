import { ActionTypes } from "../constants/ActionTypes";

const initialState = {
  notes: []
}

export const notesReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.FETCH_NOTES:
      return { ...state, notes: payload }
    default:
      return state
  }
}
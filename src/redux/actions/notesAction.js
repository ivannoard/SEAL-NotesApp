import axios from "axios";
import { ActionTypes } from "../constants/ActionTypes";

export const getAllNotes = () => {
  return async function (dispatch) {
    const notesRequest = await axios.get('http://notedapp-api.herokuapp.com/api/notes')
      .then(response => dispatch({ type: ActionTypes.FETCH_NOTES, payload: response.data.data }))
  }
}
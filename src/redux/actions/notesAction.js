import axios from "axios";
import { ActionTypes } from "../constants/ActionTypes";

export const getAllNotes = () => {
  return async function (dispatch) {
    const notesRequest = await axios.get('https://notedapp-api.herokuapp.com/api/notes')
      .then(response => {
        // console.log(response)
        dispatch({ type: ActionTypes.FETCH_NOTES, payload: response.data.data })
      })
  }
}
// export const getNotesByTitleSort = () => {
//   return async function (dispatch) {
//     const notesRequest = await axios.get(`https://notedapp-api.herokuapp.com/api/notes?sort_by=title`)
//       .then(response => {
//         console.log(response)
//         dispatch({ type: ActionTypes.FETCH_NOTES, payload: response.data.data })
//       })
//   }
// }
// export const getNotesByASCSort = (asc) => {
//   return async function (dispatch) {
//     const notesRequest = await axios.get(`https://notedapp-api.herokuapp.com/api/notes?sort_by=updated_at&sort_order=${asc}`)
//       .then(response => {
//         dispatch({ type: ActionTypes.FETCH_NOTES, payload: response.data.data })
//       })
//   }
// }
// export const getNotesByDESCSort = (desc) => {
//   return async function (dispatch) {
//     const notesRequest = await axios.get(`https://notedapp-api.herokuapp.com/api/notes?sort_by=updated_at&sort_order=${desc}`)
//       .then(response => {
//         dispatch({ type: ActionTypes.FETCH_NOTES, payload: response.data.data })
//       })
//   }
// }
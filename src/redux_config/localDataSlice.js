import { createSlice } from "@reduxjs/toolkit"

const localDataSlice = createSlice({
  name: "localData",
  initialState: [],
  reducers: {
    setLocalData(state, action) {
      return [...action.payload]
    },
    storeLocalData(state, action) {
      const {
        _version_,
        title,
        author_name,
        first_publish_year,
        publisher,
        subjetc,
      } = action.payload
      const book = {
        _version_,
        title,
        author_name,
        first_publish_year,
        publisher,
        subjetc,
        stock: 1,
      }
      return [...state, book]
    },
    updateLocalData(state, action) {
      const {
        _version_,
        title,
        author_name,
        first_publish_year,
        publisher,
        subjetc,
        stock,
      } = action.payload
      const bookUpdate = {
        _version_,
        title,
        author_name,
        first_publish_year,
        publisher,
        subjetc,
        stock,
      }
      return state.map((book) =>
        book._version_ !== _version_ ? book : bookUpdate
      )
    },
    deleteLocalData(state, action) {
      return state.filter((book) => book.id !== action.payload)
    },
  },
})
export const {
  setLocalData,
  storeLocalData,
  updateLocalData,
  deleteLocalData,
} = localDataSlice.actions
export default localDataSlice.reducer

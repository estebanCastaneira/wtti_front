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
        subject,
      } = action.payload

      const existingBookIndex = state.findIndex(
        (book) => book._version_ === _version_
      )

      if (existingBookIndex !== -1) {
        const updatedState = [...state]
        updatedState[existingBookIndex].stock += 1
        return updatedState
      }

      const newBook = {
        _version_,
        title,
        author_name,
        first_publish_year,
        publisher: publisher[0],
        subject,
        stock: 1,
      }

      return [...state, newBook]
    },
    updateLocalData(state, action) {
      const {
        _version_,
        title,
        author_name,
        first_publish_year,
        publisher,
        subject,
        stock,
      } = action.payload
      const bookUpdate = {
        _version_,
        title,
        author_name,
        first_publish_year,
        publisher,
        subject,
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

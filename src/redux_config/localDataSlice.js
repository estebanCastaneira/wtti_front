import { createSlice } from "@reduxjs/toolkit"

const localDataSlice = createSlice({
  name: "localData",
  initialState: [],
  reducers: {
    setLocalData(state, action) {
      if (!action.payload) return
      console.log(action.payload)
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
        stock,
      } = action.payload

      const version = Number(_version_)

      const existingBookIndex = state.findIndex(
        (book) => book._version_ === version
      )

      if (existingBookIndex !== -1) {
        state[existingBookIndex].stock += 1
        return
      }

      const newBook = {
        _version_: version,
        title,
        author_name,
        first_publish_year,
        publisher: Array.isArray(publisher) ? publisher[0] : "...",
        subject: Array.isArray(subject) ? subject[0] : "...",
        stock: stock || 1,
      }

      state.push(newBook)
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
      return state.filter((book) => book._version_ !== action.payload)
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

import { createSlice } from "@reduxjs/toolkit"

const localDataSlice = createSlice({
  name: "localData",
  initialState: [],
  reducers: {
    setLocalData(state, action) {
      if (!action.payload) return

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

      const newPublisher =
        Array.isArray(publisher) && publisher.length > 0
          ? publisher[0]
          : publisher || ""
      const newSubject =
        Array.isArray(subject) && subject.length > 0
          ? subject[0]
          : subject || ""

      const newBook = {
        _version_: version,
        title,
        author_name,
        first_publish_year,
        publisher: newPublisher,
        subject: newSubject,
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

      return state.map((book) =>
        book._version_ !== _version_
          ? book
          : {
              ...book,
              title,
              author_name,
              first_publish_year,
              publisher,
              subject,
              stock,
            }
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

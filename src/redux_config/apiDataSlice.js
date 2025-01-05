import { createSlice } from "@reduxjs/toolkit"

const apiDataSlice = createSlice({
  name: "apiTableData",
  initialState: [],
  reducers: {
    storeApiData(state, action) {
      const data = action.payload

      return [...data]
    },
    updateApiData(state, action) {
      return state.filter((book) => book._version_ !== action.payload)
    },
    clearApiData(state, action) {
      state = []
      return state
    },
  },
})

export const { storeApiData, updateApiData, clearApiData } =
  apiDataSlice.actions
export default apiDataSlice.reducer

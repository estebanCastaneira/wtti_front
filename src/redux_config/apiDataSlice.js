import { createSlice } from "@reduxjs/toolkit"

const apiDataSlice = createSlice({
  name: "apiTableData",
  initialState: [],
  reducers: {
    storeApiData(state, action) {
      const data = action.payload
      return [...data]
    },
    clearApiData(state, action) {
      state = []
      return state
    },
  },
})

export const { storeApiData, clearApiData } = apiDataSlice.actions
export default apiDataSlice.reducer

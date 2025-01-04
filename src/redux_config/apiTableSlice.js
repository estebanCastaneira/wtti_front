import { createSlice } from "@reduxjs/toolkit"

const apiTableSlice = createSlice({
  name: "apiTableData",
  initialState: [],
  reducers: {
    storeApiTableData(state, action) {
      const data = action.payload
      return [data]
    },
  },
})

export const { storeApiTableData } = apiTableSlice.actions
export default apiTableSlice.reducer

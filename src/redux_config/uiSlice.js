import { createSlice } from "@reduxjs/toolkit"

const uiSlice = createSlice({
  name: "ui",
  initialState: {
    isLoading: false,
    error: null,
    success: null,
  },
  reducers: {
    setIsLoading(state, action) {
      state.isLoading = action.payload
    },
    setError(state, action) {
      state.error = action.payload
      state.isLoading = false
      state.success = null
    },
    setSuccess(state, action) {
      state.success = action.payload
      state.isLoading = false
      state.error = null
    },
    clearUiState(state) {
      state.isLoading = false
      state.error = null
      state.success = null
    },
  },
})

export const { setIsLoading, setError, setSuccess, clearUiState } =
  uiSlice.actions
export default uiSlice.reducer

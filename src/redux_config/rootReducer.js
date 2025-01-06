import { combineReducers } from "@reduxjs/toolkit"
import apiDataReducer from "./apiDataSlice"
import localDataReducer from "./localDataSlice"
import uiReducer from "./uiSlice"

const rootReducer = combineReducers({
  apiData: apiDataReducer,
  localData: localDataReducer,
  ui: uiReducer,
})

export default rootReducer

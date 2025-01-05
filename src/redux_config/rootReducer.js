import { combineReducers } from "@reduxjs/toolkit"
import apiDataReducer from "./apiDataSlice"
import localDataReducer from "./localDataSlice"

const rootReducer = combineReducers({
  apiData: apiDataReducer,
  localData: localDataReducer,
})

export default rootReducer

import { combineReducers } from "@reduxjs/toolkit"
import apiTableReducer from "./apiTableSlice"
import localDataReducer from "./localDataSlice"

const rootReducer = combineReducers({
  apiTable: apiTableReducer,
  localData: localDataReducer,
})

export default rootReducer

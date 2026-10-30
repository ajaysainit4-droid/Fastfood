import { configureStore } from '@reduxjs/toolkit'
import  createReducer  from '../features/cartSlice'

export const store = configureStore({
  reducer: {
    AllCart : createReducer
  }
})
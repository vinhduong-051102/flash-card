import { configureStore } from '@reduxjs/toolkit'
import { contentSlice } from '../components/Content/contentSlice'
import { headerSlice } from '../components/Header/HeaderSlice'


export const store = configureStore({
  reducer: {
    header: headerSlice.reducer,
    content: contentSlice.reducer
  },
})
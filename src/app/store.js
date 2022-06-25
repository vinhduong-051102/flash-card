import { configureStore } from '@reduxjs/toolkit'
import { contentSlice } from '../components/Content/contentSlice'
import { headerSlice } from '../components/Header/HeaderSlice'
import createSagaMiddleware from 'redux-saga'
import rootSaga from './rootSaga'

const saga = createSagaMiddleware()

export const store = configureStore({
  reducer: {
    header: headerSlice.reducer,
    content: contentSlice.reducer
  },
  middleware: (getDefaultMiddleware)=> getDefaultMiddleware().concat(saga)

})

saga.run(rootSaga)
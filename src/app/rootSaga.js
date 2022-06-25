import { takeLatest, select } from 'redux-saga/effects'
import { saveInfo, deleteCard, deleteAll } from '../components/Content/contentSlice'
import { selectFlashcards } from '../components/Content/contentSlice'

function* saveInfoLocal() {
  const data = yield select(selectFlashcards)
  localStorage.setItem('flashcards', JSON.stringify(data))
}

export default function* rootSaga() {
  yield takeLatest([saveInfo.type, deleteCard.type, deleteAll.type] , saveInfoLocal)
}
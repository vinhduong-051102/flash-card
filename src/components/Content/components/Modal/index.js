import style from './Modal.module.scss';
import classNames from 'classnames/bind';
import { useSelector } from 'react-redux'
import { useState } from 'react'
import { selectIsOpenModal } from '../../../Header/HeaderSlice';
import { useDispatch } from 'react-redux';
import { changeShowModal } from '../../../Header/HeaderSlice';
import { saveInfo } from '../../contentSlice';

const cx = classNames.bind(style)

function Modal() {
  const dispatch = useDispatch()

  const isOpenModal = useSelector(selectIsOpenModal)
  const [question, setQuestion] = useState('')
  const [answer, setAnswer] = useState('')
  const handleCloseModal = () => {
    dispatch(changeShowModal(false))
  }
  const handleInputQuestion = (e) => {
    setQuestion(e.target.value)
  }
  const handleInputAnswer = (e) => {
    setAnswer(e.target.value)
  }
  const handleSave = () => {
    dispatch(saveInfo({question, answer}))
    setQuestion('')
    setAnswer('')
  }
  return ( 
    <div className={cx('wrapper')} style={isOpenModal ? {} : {display: 'none'}}>
      <h2>Create Flashcard</h2>
      <div className={cx('inputField')}>
        <h4>Question</h4>
        <input onChange={handleInputQuestion} value={question}  />
      </div>
      <div className={cx('inputField')}>
        <h4>Answer</h4>
        <input onChange={handleInputAnswer} value={answer}  />
      </div>
      <div className={cx('buttonField')}>
        <button onClick={handleSave}>Save</button>
        <button onClick={handleCloseModal}>Close</button>
      </div>
    </div>
  );
}

export default Modal;
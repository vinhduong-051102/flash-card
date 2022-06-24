import style from './Flashcard.module.scss'
import classNames from 'classnames/bind'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from 'react'
import { faMinus } from '@fortawesome/free-solid-svg-icons'
import { useDispatch } from 'react-redux'
import { deleteCard } from '../../contentSlice'
const cx = classNames.bind(style)

function Flashcard({ answer, question, index }) {
  const dispatch = useDispatch()
  const [isShow, setIsShow] = useState(false)
  const handleUnShowCard = () => {
    dispatch(deleteCard(index))
  }
  const handleShowAnswer = () => {
    setIsShow(true)
  }
  const handleHideAnswer = () => {
    setIsShow(false)

  }
  return ( 
    <div className={cx('wrapper')} onMouseEnter={handleShowAnswer} onMouseLeave={handleHideAnswer} >
      <div className={cx('top')}>
        <FontAwesomeIcon icon={faMinus} className={cx('minusIcon')} onClick={handleUnShowCard} />
      </div>
      <div className={cx('content')}  >
        <h3 className={cx('question')}>{question}</h3>
        <h4 className={cx('answer')} style={isShow ? {display: 'block'} : {display: 'none'}} >{answer}</h4>
      </div>
    </div>
  );
}

export default Flashcard;
import styles from './Content.module.scss';
import classNames from 'classnames/bind';
import Modal from './components/Modal';
import Flashcard from './components/Flashcard';
import { useSelector } from 'react-redux';
import { selectFlashcards } from './contentSlice';

const cx = classNames.bind(styles)

function Content() {
  const flashCardList = useSelector(selectFlashcards)
  return ( 
    <div className={cx('wrapper')}>
      <Modal />
      <div className={cx('container')}>
        {flashCardList.map((flashCard, index) => {
          return <Flashcard key={index} answer={flashCard.answer} question={flashCard.question} index={index} />
        })}
      </div>
    </div>
  );
}

export default Content;
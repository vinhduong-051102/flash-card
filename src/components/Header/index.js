import style from './Header.module.scss'
import classNames from "classnames/bind"
import { useDispatch } from 'react-redux'
import { changeShowModal } from './HeaderSlice'
import { deleteAll } from '../Content/contentSlice'
const cx = classNames.bind(style)

function Header() {
  const dispatch = useDispatch()
  const handleAddCard = () => {
    dispatch(changeShowModal(true))
  }
  const handleDeleteAll = () => {
    dispatch(deleteAll())
  }
  return (
    <header className={cx('wrapper')} >
      <div className={cx('container')}>
        <h1 className={cx('title')}>Flashcards</h1>
        <div className={cx('action')}>
          <button onClick={handleAddCard}>Add card</button>
          <button onClick={handleDeleteAll}>Delete card</button>
        </div>
      </div>
    </header>
  );
}

export default Header;

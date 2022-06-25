/* eslint-disable react-hooks/exhaustive-deps */
import styles from "./Content.module.scss";
import classNames from "classnames/bind";
import Modal from "./components/Modal";
import Flashcard from "./components/Flashcard";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { selectFlashcards } from "./contentSlice";

const cx = classNames.bind(styles);

function Content() {
  const data = localStorage.getItem("flashcards");
  if (!data) {
    localStorage.setItem("flashcards", "[]");
  }
  const [flashCardList, setFlashCardList] = useState([]);
  useEffect(() => {
    setFlashCardList(JSON.parse(data));
  }, [useSelector(selectFlashcards)]);
  return (
    <div className={cx("wrapper")}>
      <Modal />
      <div className={cx("container")}>
        {flashCardList.map((flashCard, index) => {
          return (
            <Flashcard
              key={index}
              answer={flashCard.answer}
              question={flashCard.question}
              index={index}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Content;

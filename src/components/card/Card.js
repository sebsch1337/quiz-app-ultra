import { useState } from "react";
import Tag from "../tag/Tag";
import "./Card.css";

import bookmarkIconAdd from "../../img/bookmark_add.svg";
import bookmarkedIcon from "../../img/bookmarked.svg";
import deleteIcon from "../../img/delete.svg";

const Card = ({ cardId, question, answer, tags, bookmarked, deleteCard }) => {
  const [showAnswer, setShowAnswer] = useState(false);
  return (
    <li className="card__item card__item__enter">
      <button className="card__top-button card__top-button--bookmark">
        <img
          className="card__top-button-icon--bookmark"
          src={bookmarked ? bookmarkedIcon : bookmarkIconAdd}
          alt={bookmarked ? "Remove from bookmarks" : "Add to bookmarks"}
        />
      </button>
      <button
        onClick={() => deleteCard(cardId)}
        className="card__top-button card__top-button--delete"
      >
        <img
          className="card__top-button-icon--delete"
          src={deleteIcon}
          alt="Delete card"
        />
      </button>
      <p className="card__question">{question}</p>
      <button
        onClick={() => setShowAnswer((showAnswer) => !showAnswer)}
        className="card__reveal-button"
      >
        {showAnswer ? "Hide answer" : "Show answer"}
      </button>
      <p className="card__answer">{showAnswer && answer}</p>
      <ul className="card__tag-list">
        {tags.map((tag) => {
          return <Tag key={tag} name={tag} />;
        })}
      </ul>
    </li>
  );
};

export default Card;

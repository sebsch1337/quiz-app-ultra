import { useState } from "react";
import Tag from "../tag/Tag";
import "./Card.css";

import bookmarkIconAdd from "../../img/bookmark_add.svg";

const Card = ({ question, answer, tags }) => {
  const [showAnswer, setShowAnswer] = useState(false);
  return (
    <li className="card__item card__item__enter">
      <button className="card__bookmark-button">
        <img
          className="card__bookmark-icon"
          src={bookmarkIconAdd}
          alt="Add to bookmarks"
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

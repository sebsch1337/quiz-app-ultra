import { useState } from "react";
import "./Card.css";
import styled from "styled-components";
import bookmarkIconAdd from "../../img/bookmark_add.svg";
import bookmarkedIcon from "../../img/bookmarked.svg";
import deleteIcon from "../../img/delete.svg";

const Card = ({
  cardId,
  question,
  answer,
  tags,
  bookmarked,
  deleteCard,
  toggleBookmark,
}) => {
  const [showAnswer, setShowAnswer] = useState(false);
  return (
    <li className="card__item card__item__enter">
      <button
        onClick={() => toggleBookmark(cardId)}
        className="card__top-button card__top-button--bookmark"
      >
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
        {tags.map((tag) => (
          <TagListItem key={tag}>{tag}</TagListItem>
        ))}
      </ul>
    </li>
  );
};

export default Card;

const TagListItem = styled.li`
  background-color: var(--secondary-color);
  color: var(--dark-color);
  border: dotted 1px var(--primary-color);
  border-radius: 5px;
  padding: 2px 5px;
  font-size: 8pt;
  text-decoration: none;
`;

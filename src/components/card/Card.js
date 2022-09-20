import Tag from "../tag/Tag";
import "./Card.css";

const Card = ({ question, answer, tags }) => {
  return (
    <li className="card__item card__item__enter">
      <button className="card__bookmark-button">
        <img
          className="card__bookmark-icon"
          src="./img/bookmark_add.svg"
          alt="Add to bookmarks"
        />
      </button>
      <p className="card__question">{question}</p>
      <button className="card__reveal-button">Show answer</button>
      <p className="card__answer">{answer}</p>
      <ul className="card__tag-list">
        {tags.map((tag) => {
          return <Tag key={tag} name={tag} />;
        })}
      </ul>
    </li>
  );
};

export default Card;

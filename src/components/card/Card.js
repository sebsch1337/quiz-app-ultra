import "./Card.css";

const Card = () => {
  return (
    <li className="card__item card__item__enter">
      <button className="card__bookmark-button">
        <img
          className="card__bookmark-icon"
          src="./img/bookmark_add.svg"
          alt="Add to bookmarks"
        />
      </button>
      <p className="card__question">Frage</p>
      <button className="card__reveal-button">Show answer</button>
      <p className="card__answer">Antwort</p>
      <ul className="card__tag-list">
        <li>
          <span className="card__tag">#bla</span>
        </li>
      </ul>
    </li>
  );
};

export default Card;

import "./Cards.css";
import Card from "../../components/card/Card";

const Cards = ({ cards, showBookmarksOnly }) => {
  return (
    <ul className="card__list">
      {cards.map(({ id, question, answer, tags, bookmarked }) => {
        if (showBookmarksOnly && !bookmarked) return "";
        return (
          <Card
            key={id}
            question={question}
            answer={answer}
            tags={tags}
            bookmarked={bookmarked}
          />
        );
      })}
    </ul>
  );
};

export default Cards;

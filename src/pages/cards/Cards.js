import "./Cards.css";
import Card from "../../components/card/Card";

const Cards = ({ cards, deleteCard }) => {
  return (
    <ul className="card__list">
      {cards.map(({ id, question, answer, tags, bookmarked }) => {
        return (
          <Card
            key={id}
            cardId={id}
            question={question}
            answer={answer}
            tags={tags}
            bookmarked={bookmarked}
            deleteCard={deleteCard}
          />
        );
      })}
    </ul>
  );
};

export default Cards;

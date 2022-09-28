import Card from "../../components/Card";

const Cards = ({ cards, deleteCard, toggleBookmark }) => {
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
            toggleBookmark={toggleBookmark}
          />
        );
      })}
    </ul>
  );
};

export default Cards;

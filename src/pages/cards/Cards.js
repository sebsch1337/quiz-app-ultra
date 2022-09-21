import "./Cards.css";
import Card from "../../components/card/Card";

const Cards = ({ cards }) => {
  return (
    <ul className="card__list">
      {cards.map(({ id, question, answer, tags }) => {
        return (
          <Card key={id} question={question} answer={answer} tags={tags} />
        );
      })}
    </ul>
  );
};

export default Cards;

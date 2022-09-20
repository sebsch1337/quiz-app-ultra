import "./Tag.css";

const Tag = ({ name }) => {
  return (
    <li>
      <span className="card__tag">{name}</span>
    </li>
  );
};

export default Tag;

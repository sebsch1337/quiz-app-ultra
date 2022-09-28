import { useState } from "react";
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
    <CardListItem>
      <BookmarkButton onClick={() => toggleBookmark(cardId)}>
        <BookmarkImage
          src={bookmarked ? bookmarkedIcon : bookmarkIconAdd}
          alt={bookmarked ? "Remove from bookmarks" : "Add to bookmarks"}
        />
      </BookmarkButton>
      <DeleteButton onClick={() => deleteCard(cardId)}>
        <DeleteImage src={deleteIcon} alt="Delete card" />
      </DeleteButton>
      <CardQuestion>{question}</CardQuestion>
      <ShowAnswerButton
        onClick={() => setShowAnswer((showAnswer) => !showAnswer)}
      >
        {showAnswer ? "Hide answer" : "Show answer"}
      </ShowAnswerButton>
      <CardAnswer>{showAnswer && answer}</CardAnswer>
      <TagList>
        {tags.map((tag) => (
          <TagListItem key={tag}>{tag}</TagListItem>
        ))}
      </TagList>
    </CardListItem>
  );
};

export default Card;

const TagList = styled.ul`
  height: 33%;
  width: 100%;
  padding: 5px;
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  align-items: flex-end;
  gap: 5px;
  list-style: none;
`;

const CardAnswer = styled.p`
  margin-top: 10px;
  font-size: 10pt;
  padding: 10px;
  height: 1em;
`;

const ShowAnswerButton = styled.button`
  background-color: var(--dark-color);
  color: var(--secondary-color);
  margin-top: 15px;
  border: solid 2px var(--secondary-color);
  border-radius: 5px;
  padding: 5px 10px;
  font-family: "Open Sans";
  font-size: 11pt;
  transition: 0.1s cubic-bezier(0.86, 0, 0.07, 1);

  &:active {
    transform: scale(0.9);
  }
`;

const CardQuestion = styled.p`
  height: 33%;
  margin-top: 25px;
  font-size: 14pt;
  font-weight: bold;
  text-align: center;
`;

const DeleteImage = styled.img`
  height: 25px;
`;

const DeleteButton = styled.button`
  position: absolute;
  background-color: transparent;
  border: 0;
  right: 0px;
  bottom: 5px;
`;

const BookmarkImage = styled.img`
  height: 40px;
`;

const BookmarkButton = styled.button`
  position: absolute;
  background-color: transparent;
  border: 0;
  right: 20px;
  top: -8px;
`;

const CardListItem = styled.li`
  margin-top: 1em;
  position: relative;
  width: 350px;
  height: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: var(--primary-color);
  border-radius: 15px;
  padding: 10px;
  transform: scale(1, 1);
  transition: 0.5s ease;
`;

const TagListItem = styled.li`
  background-color: var(--secondary-color);
  color: var(--dark-color);
  border: dotted 1px var(--primary-color);
  border-radius: 5px;
  padding: 2px 5px;
  font-size: 8pt;
  text-decoration: none;
`;

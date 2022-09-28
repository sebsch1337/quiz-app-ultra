import styled from "styled-components";
import { useState } from "react";

const Create = ({ appendCard }) => {
  const [counter, setCounter] = useState([150, 150]);

  const onSubmitNewCard = (event) => {
    event.preventDefault();
    appendCard(
      event.target.question.value,
      event.target.answer.value,
      event.target.tag.value
    );
    event.target.reset();
  };

  const onChangeQuestionText = (event) => {
    const diff = 150 - event.target.value.length;
    setCounter((counter) => [diff, counter[1]]);
  };

  const onChangeAnswerText = (event) => {
    const diff = 150 - event.target.value.length;
    setCounter((counter) => [counter[0], diff]);
  };

  return (
    <>
      <Header>Add new quiz card</Header>
      <CardForm onSubmit={onSubmitNewCard} data-js="card-form">
        <FormLabel htmlFor="question">Your question:</FormLabel>
        <FormTextArea
          name="question"
          id="question"
          data-js="question-text"
          maxLength="150"
          onChange={onChangeQuestionText}
          required
        ></FormTextArea>
        <FormTextCounter counter={counter[0]}>
          {counter[0]} characters left
        </FormTextCounter>
        <FormLabel htmlFor="answer">Your answer:</FormLabel>
        <FormTextArea
          name="answer"
          id="answer"
          data-js="answer-text"
          maxLength="150"
          onChange={onChangeAnswerText}
          required
        ></FormTextArea>
        <FormTextCounter counter={counter[0]}>
          {counter[1]} characters left
        </FormTextCounter>
        <FormLabel htmlFor="tag">Your tag:</FormLabel>
        <TagInput
          type="text"
          name="tag"
          id="tag"
          data-js="tag-input"
          required
        />
        <CreateButton
          type="submit"
          name="submit"
          id="submit"
          data-js="submit-button"
        >
          Add
        </CreateButton>
      </CardForm>
    </>
  );
};

export default Create;

const Header = styled.h2`
  margin-top: 2em;
`;

const CardForm = styled.form`
  margin-top: 1em;
  width: 350px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
`;

const FormLabel = styled.label`
  font-size: 0.8em;
`;

const FormTextArea = styled.textarea`
  height: 6em;
  width: 100%;
  background-color: var(--secondary-color);
  border: dashed;
  border-radius: 1em;
  padding: 1em;
`;

const FormTextCounter = styled.p`
  text-align: right;
  font-size: 0.7em;
  ${(props) => (props.counter === 0 ? "color: red" : "color: black")};
`;

const TagInput = styled.input`
  background-color: var(--secondary-color);
  border: dashed;
  border-radius: 1em;
  padding: 1em;
`;

const CreateButton = styled.button`
  font-size: 0.8em;
  width: 10em;
  height: 2em;
  margin-top: 1em;
  align-self: center;
  background-color: var(--darker-color);
  border: 2px solid var(--primary-color);
  border-radius: 1em;
  color: var(--secondary-color);
`;

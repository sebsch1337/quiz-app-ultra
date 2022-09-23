import "./Create.css";

const Create = () => {
  return (
    <>
      <h2 className="card__form_title">Add new quiz card</h2>
      <form action="" className="card__form" data-js="card-form">
        <label className="card__form__label" htmlFor="question">
          Your question:
        </label>
        <textarea
          className="card__form__text"
          name="question"
          id="question"
          data-js="question-text"
          maxLength="150"
          required
        ></textarea>
        <p className="card__form__counter" data-js="question-text-counter">
          150 characters left
        </p>
        <label htmlFor="answer" className="card__form__label">
          Your answer:
        </label>
        <textarea
          className="card__form__text"
          name="answer"
          id="answer"
          data-js="answer-text"
          maxLength="150"
          required
        ></textarea>
        <p className="card__form__counter" data-js="answer-text-counter">
          150 characters left
        </p>
        <label htmlFor="tag" className="card__form__label">
          Your tag:
        </label>
        <input
          type="text"
          name="tag"
          id="tag"
          className="card__form__input"
          data-js="tag-input"
          required
        />
        <button
          className="card__form__button"
          type="submit"
          name="submit"
          id="submit"
          data-js="submit-button"
        >
          Add
        </button>
      </form>
    </>
  );
};

export default Create;

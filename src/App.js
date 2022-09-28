import "./App.css";

import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import { v4 as uuid } from "uuid";

import Cards from "./pages/cards/Cards";
import Create from "./components/Create";
import Profile from "./pages/profile/Profile";
import Header from "./components/Header";
import Navigation from "./components/Navigation";

const db = [
  {
    id: uuid().slice(0, 8),
    question: "How is the weather?",
    answer: "Sunny!",
    tags: ["weather", "sun", "rain"],
    bookmarked: true,
  },
  {
    id: uuid().slice(0, 8),
    question: "What is the best beer?",
    answer: "Dortmunder Kronen!",
    tags: ["beer", "dortmund"],
    bookmarked: false,
  },
  {
    id: uuid().slice(0, 8),
    question: "How many people live in the Philippines?",
    answer: "Around 100m",
    tags: ["philippines", "population"],
    bookmarked: true,
  },
];

function App() {
  const [cards, setCards] = useState(() => {
    return JSON.parse(localStorage.getItem("cards")) ?? db;
  });

  useEffect(() => {
    localStorage.setItem("cards", JSON.stringify(cards));
  }, [cards]);

  const appendCard = (question, answer, tag) => {
    setCards((prevCards) => {
      return [
        ...prevCards,
        {
          id: uuid().slice(0, 8),
          question: question,
          answer: answer,
          tags: [tag],
          bookmarked: false,
        },
      ];
    });
  };

  const deleteCard = (cardId) =>
    setCards(cards.filter((card) => card.id !== cardId));

  const toggleBookmark = (cardId) => {
    setCards(
      cards.map((card) => {
        if (card.id === cardId) {
          return { ...card, bookmarked: !card.bookmarked };
        } else {
          return card;
        }
      })
    );
  };

  return (
    <div className="App">
      <Header />
      <main>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Cards
                  cards={cards}
                  deleteCard={deleteCard}
                  toggleBookmark={toggleBookmark}
                />
                <Create appendCard={appendCard} />
              </>
            }
          />
          <Route
            path="/bookmarks"
            element={
              <Cards
                cards={cards.filter((card) => card.bookmarked)}
                deleteCard={deleteCard}
                toggleBookmark={toggleBookmark}
              />
            }
          />
          <Route path="/profile" element={<Profile />} />
          <Route path="*" element={<h2>Seite existiert nicht!</h2>} />
        </Routes>
      </main>
      <Navigation />
    </div>
  );
}

export default App;

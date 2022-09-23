import "./App.css";

import { useEffect, useState, useId } from "react";
import { v4 as uuid } from "uuid";

import Cards from "./pages/cards/Cards";
import Profile from "./pages/profile/Profile";
import Header from "./components/header/Header";
import Navigation from "./components/navigation/Navigation";
import Create from "./components/create/Create";

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
  const [page, setPage] = useState("home");
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

  const loadPage = (page) => {
    switch (page) {
      case "home":
        return (
          <>
            <Cards cards={cards} />
            <Create appendCard={appendCard} />
          </>
        );
      case "profile":
        return <Profile />;
      case "bookmarks":
        return <Cards cards={db.filter((card) => card.bookmarked)} />;
      default:
        return page + " exisitert (noch) nicht!";
    }
  };

  return (
    <div className="App">
      <Header />
      <main>{loadPage(page)}</main>
      <Navigation page={page} setPage={setPage} />
    </div>
  );
}

export default App;

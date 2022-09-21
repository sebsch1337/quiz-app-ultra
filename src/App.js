import "./App.css";
import Card from "./components/card/Card";
import Header from "./components/header/Header";
import Navigation from "./components/navigation/Navigation";
import { useState } from "react";

const db = [
  {
    id: 0,
    question: "How is the weather?",
    answer: "Sunny!",
    tags: ["weather", "sun", "rain"],
  },
  {
    id: 1,
    question: "What is the best beer?",
    answer: "Dortmunder Kronen!",
    tags: ["beer", "dortmund"],
  },
  {
    id: 3,
    question: "How many people live in the Philippines?",
    answer: "Around 100m",
    tags: ["philippines", "population"],
  },
];

function App() {
  const [page, setPage] = useState("home");

  return (
    <div className="App">
      <Header />
      <main>
        <ul className="card__list">
          {db.map(({ id, question, answer, tags }) => {
            return (
              <Card key={id} question={question} answer={answer} tags={tags} />
            );
          })}
        </ul>
      </main>
      <Navigation page={page} setPage={setPage} />
    </div>
  );
}

export default App;

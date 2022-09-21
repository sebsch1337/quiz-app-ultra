import "./App.css";
import Cards from "./pages/cards/Cards";
import Profile from "./pages/profile/Profile";
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

  const loadPage = (page) => {
    console.log(page + " wurde geklickt.");
    switch (page) {
      case "home":
        return <Cards cards={db} />;
      case "profile":
        return <Profile />;
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

import "./App.css";
import Card from "./components/card/Card";
import Header from "./components/header/Header";
import Navigation from "./components/navigation/Navigation";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <ul className="card__list">
          <Card />
          <Card />
        </ul>
      </main>
      <Navigation />
    </div>
  );
}

export default App;

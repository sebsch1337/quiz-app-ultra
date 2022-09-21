import { useState } from "react";
import "./Navigation.css";
import bookmarksIcon from "../../img/bookmarks.svg";
import homeIcon from "../../img/home.svg";
import profileIcon from "../../img/profile.svg";

const Navigation = () => {
  const [activeNav, setActiveNav] = useState("home");

  return (
    <footer className="footer">
      <nav className="navigation">
        <button
          onClick={() => setActiveNav("home")}
          className={
            `navigation__button` +
            (activeNav === "home" ? " navigation__button--active" : "")
          }
        >
          <img src={homeIcon} alt="Navigate to home" />
        </button>

        <button
          onClick={() => setActiveNav("bookmarks")}
          className={
            `navigation__button` +
            (activeNav === "bookmarks" ? " navigation__button--active" : "")
          }
        >
          <img src={bookmarksIcon} alt="Navigate to bookmarks" />
        </button>

        <button
          onClick={() => setActiveNav("profile")}
          className={
            `navigation__button` +
            (activeNav === "profile" ? " navigation__button--active" : "")
          }
        >
          <img src={profileIcon} alt="Navigate to profile" />
        </button>
      </nav>
    </footer>
  );
};

export default Navigation;

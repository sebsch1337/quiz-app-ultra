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
            activeNav === "home"
              ? "navigation__button navigation__button--active"
              : "navigation__button"
          }
        >
          <img src={homeIcon} alt="Navigate to home" />
        </button>

        <button
          onClick={() => setActiveNav("bookmarks")}
          className={
            activeNav === "bookmarks"
              ? "navigation__button navigation__button--active"
              : "navigation__button"
          }
        >
          <img src={bookmarksIcon} alt="Navigate to bookmarks" />
        </button>

        <button
          onClick={() => setActiveNav("profile")}
          className={
            activeNav === "profile"
              ? "navigation__button navigation__button--active"
              : "navigation__button"
          }
        >
          <img src={profileIcon} alt="Navigate to profile" />
        </button>
      </nav>
    </footer>
  );
};

export default Navigation;

import "./Navigation.css";
import bookmarksIcon from "../../img/bookmarks.svg";
import homeIcon from "../../img/home.svg";
import profileIcon from "../../img/profile.svg";

const Navigation = ({ page, setPage }) => {
  return (
    <footer className="footer">
      <nav className="navigation">
        <button
          onClick={() => setPage("home")}
          className={
            `navigation__button` +
            (page === "home" ? " navigation__button--active" : "")
          }
        >
          <img src={homeIcon} alt="Navigate to home" />
        </button>

        <button
          onClick={() => setPage("bookmarks")}
          className={
            `navigation__button` +
            (page === "bookmarks" ? " navigation__button--active" : "")
          }
        >
          <img src={bookmarksIcon} alt="Navigate to bookmarks" />
        </button>

        <button
          onClick={() => setPage("profile")}
          className={
            `navigation__button` +
            (page === "profile" ? " navigation__button--active" : "")
          }
        >
          <img src={profileIcon} alt="Navigate to profile" />
        </button>
      </nav>
    </footer>
  );
};

export default Navigation;

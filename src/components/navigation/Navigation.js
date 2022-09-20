import "./Navigation.css";
import bookmarksIcon from "../../img/bookmarks.svg";
import homeIcon from "../../img/home.svg";
import profileIcon from "../../img/profile.svg";

const Navigation = () => {
  return (
    <footer className="footer">
      <nav className="navigation">
        <div className="navigation__button navigation__button--active">
          <img src={homeIcon} alt="Navigate to home" />
        </div>

        <div className="navigation__button">
          <img src={bookmarksIcon} alt="Navigate to bookmarks" />
        </div>

        <div className="navigation__button">
          <img src={profileIcon} alt="Navigate to profile" />
        </div>
      </nav>
    </footer>
  );
};

export default Navigation;

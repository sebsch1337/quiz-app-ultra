import "./Navigation.css";

const Navigation = () => {
  return (
    <footer className="footer">
      <nav className="navigation">
        <div className="navigation__button navigation__button--active">
          <img src="./img/home.svg" alt="Navigate to home" />
        </div>

        <div className="navigation__button">
          <img src="./img/bookmarks.svg" alt="Navigate to bookmarks" />
        </div>

        <div className="navigation__button">
          <img src="./img/profile.svg" alt="Navigate to profile" />
        </div>
      </nav>
    </footer>
  );
};

export default Navigation;

import "./Navigation.css";
import bookmarksIcon from "../../img/bookmarks.svg";
import homeIcon from "../../img/home.svg";
import profileIcon from "../../img/profile.svg";

import styled from "styled-components";
import { NavLink } from "react-router-dom";

const Navigation = ({ page, setPage }) => {
  return (
    <footer className="footer">
      <nav className="navigation">
        <LinkButton to="/" end>
          <img src={homeIcon} alt="Navigate to home" />
        </LinkButton>

        <LinkButton to="/bookmarks">
          <img src={bookmarksIcon} alt="Navigate to bookmarks" />
        </LinkButton>

        <LinkButton to="/profile">
          <img src={profileIcon} alt="Navigate to profile" />
        </LinkButton>
      </nav>
    </footer>
  );
};

export default Navigation;

const LinkButton = styled(NavLink)`
  border: 0;
  background-color: var(--dark-color);
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.3s linear;

  &.active,
  &:hover {
    background-color: var(--darker-color);
  }
`;

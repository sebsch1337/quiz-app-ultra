import bookmarksIcon from "../../img/bookmarks.svg";
import homeIcon from "../../img/home.svg";
import profileIcon from "../../img/profile.svg";

import styled from "styled-components";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <Footer>
      <NavBar>
        <LinkButton to="/" end>
          <img src={homeIcon} alt="Navigate to home" />
        </LinkButton>

        <LinkButton to="/bookmarks">
          <img src={bookmarksIcon} alt="Navigate to bookmarks" />
        </LinkButton>

        <LinkButton to="/profile">
          <img src={profileIcon} alt="Navigate to profile" />
        </LinkButton>
      </NavBar>
    </Footer>
  );
};

export default Navigation;

const NavBar = styled.nav`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 100%;
`;

const Footer = styled.footer`
  height: 50px;
  width: 100%;
  background-color: var(--dark-color);
  position: fixed;
  bottom: 0;
`;

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

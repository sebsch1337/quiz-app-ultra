import styled from "styled-components";

const Header = () => {
  return (
    <HeaderBar>
      <AppTitle>Quiz App Ultra</AppTitle>
    </HeaderBar>
  );
};

export default Header;

const HeaderBar = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  position: sticky;
  top: 0;
  z-index: 10;
  background-color: var(--dark-color);
  color: var(--secondary-color);
`;

const AppTitle = styled.h1`
  font-size: 18pt;
`;

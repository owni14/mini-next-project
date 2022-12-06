import Link from 'next/link';
import styled from 'styled-components';

const MainNavHeader = styled.header`
  width: 100%;
  height: 4rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: #1e90ff;
  padding: 0 5%;
`;

const MainTitle = styled.p`
  color: white;
  font-size: 2rem;
  &:hover {
    color: black;
  }
`;

const MainNavBar = styled.nav`
  display: flex;
  flex-direction: row;
`;

const NavListBox = styled.ul``;

const NavList = styled.li`
  list-style: none;
  color: white;
  &:hover {
    color: black;
  }
`;

const MainNavigation = () => {
  return (
    <MainNavHeader>
      <MainTitle>
        <Link href='/'>React Meetups</Link>
      </MainTitle>
      <MainNavBar>
        <NavListBox>
          <NavList>
            <Link href='/'>All Meetups</Link>
          </NavList>
        </NavListBox>
        <NavListBox>
          <NavList>
            <Link href='/new-meetup'>Add New Meetup</Link>
          </NavList>
        </NavListBox>
      </MainNavBar>
    </MainNavHeader>
  );
};

export default MainNavigation;

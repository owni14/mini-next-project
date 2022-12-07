import MainNavigation from './MainNavigation';
import styled from 'styled-components';

const MainBox = styled.main`
  margin: 0 25%;
`;

const Layout = (props) => {
  return (
    <>
      <MainNavigation />
      <MainBox>{props.children}</MainBox>
    </>
  );
};

export default Layout;

import { Link } from 'react-router-dom';
import { AppBarBox, Ul, NaVlink, Nav, Li   } from './AppBar.styled';
import { useMediaQuery } from 'react-responsive';
// import { useMediaQuery } from '@mui/material';

const AppBar = () => {
  // const isTablet = useMediaQuery({ minWidth: 768 });
  const isDesktop = useMediaQuery({ minWidth: 1600 });
  return (
    <AppBarBox>
    <Link to="/">Logo</Link>
    {isDesktop && <Nav>
        <Ul>
          <Li>
          <NaVlink to="/mountain">Mountain</NaVlink>
          </Li>
          <Li>
          <NaVlink to="/road">Road</NaVlink>
          </Li>
          <Li>
          <NaVlink to="/active">Active</NaVlink>
          </Li>
          <Li>
          <NaVlink to="/kids">Kids</NaVlink>
          </Li>
          <Li>
          <NaVlink to="/electric">Electric</NaVlink>
          </Li>
        </Ul>
      </Nav>}
      
    </AppBarBox>
  );
};
export default AppBar;

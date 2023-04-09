import { Link } from 'react-router-dom';
import { AppBarBox, Ul, NaVlink, Nav, Li   } from './AppBar.styled';

const AppBar = () => {
  return (
    <AppBarBox>
    <Link to="/">Logo</Link>
      <Nav>
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
      </Nav>
    </AppBarBox>
  );
};
export default AppBar;

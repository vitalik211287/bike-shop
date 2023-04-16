import { Link } from 'react-router-dom';
import { AppBarBox } from './AppBar.styled';
import { useMediaQuery } from 'react-responsive';
import { ReactComponent as Logo } from '../../img/Logo.svg';
import Navigation from 'components/Nav/Navigation';
import ButtonBarHeader from 'components/ButtonBarHeader/ButtonBarHeader';
import UnderAppBar from 'components/UnderAppBar/UnderAppBar';
import { useUser } from 'UserContext';

const AppBar = () => {
  // const isTablet = useMediaQuery({ minWidth: 768 });
  const isDesktop = useMediaQuery({ minWidth: 1600 });
  const { isActive } = useUser();
  return (
    <>
      <AppBarBox>
        <Link to="/">
          <Logo />
        </Link>
        {isDesktop ? <Navigation /> : <ButtonBarHeader />}
      </AppBarBox>
      <UnderAppBar />
      {isActive && (
        <div>
          <Navigation />
        </div>
      )}
    </>
  );
};
export default AppBar;

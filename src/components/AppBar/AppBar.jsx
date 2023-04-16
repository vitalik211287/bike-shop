import { Link } from 'react-router-dom';
import { AppBarBox } from './AppBar.styled';
import { useMediaQuery } from 'react-responsive';
import { ReactComponent as Logo } from '../../img/Logo.svg';
import Navigation from 'components/Nav/Navigation';
import ButtonBarHeader from 'components/ButtonBarHeader/ButtonBarHeader';
import UnderAppBar from 'components/UnderAppBar/UnderAppBar';
import BurgerMenu from 'components/BurgerMenu/BurgerMenu';

const AppBar = () => {
  const isTablet = useMediaQuery({ minWidth: 768 });
  const isDesktop = useMediaQuery({ minWidth: 1600 });
  

  return (
    <>
      <AppBarBox>
        <Link to="/">
          <Logo />
        </Link>
        {isDesktop ? <Navigation /> : <ButtonBarHeader />}
      </AppBarBox>
      <UnderAppBar />
      {!isDesktop && !isTablet && <BurgerMenu />}
    </>
  );
};
export default AppBar;

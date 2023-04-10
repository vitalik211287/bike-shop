import AppBar from 'components/AppBar/AppBar';
import Footer from 'components/Footer/Footer';
import { Outlet } from 'react-router-dom';
import { LayoutBox, Main } from './Layout.styled';

const Layout = () => {
  return (
    <LayoutBox>
      <header>
        <AppBar />
      </header>
        <Main>
          <Outlet />
        </Main>
        <footer>
          <Footer />
        </footer>
    </LayoutBox>
  );
};

export default Layout;

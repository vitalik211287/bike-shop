import AppBar from 'components/AppBar/AppBar';
import Footer from 'components/Footer/Footer';
import { Outlet } from 'react-router-dom';
import { LayoutBox } from './Layout.styled';

const Layout = () => {
  return (
    <LayoutBox>
      <header>
        <AppBar />
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <Footer />
      </footer>
    </LayoutBox>
  );
};

export default Layout;

// import { NavLink } from 'react-router-dom';
import { Section, Text } from './Main.styled';
import { NavLinkButton } from 'components/Modal/CartModal/CartModal.styled';

const Main = () => {
  return (
    <Section>
      <Text>Expand the limits of one's comfort zone</Text>
      <img src="../../../../../bike-shop/src/img/Frame.jpg" alt="bike" />
      <NavLinkButton to="catalog">Catalog</NavLinkButton>
    </Section>
  );
};
export default Main;

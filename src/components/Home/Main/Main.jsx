// import { NavLink } from 'react-router-dom';
import { Section, Text } from './Main.styled';
import { NavLinkButton } from 'components/Modal/CartModal/CartModal.styled';
import bike from './Frame.png'



const Main = () => {
  return (
    <Section>
      <Text>Expand the limits of one's comfort zone</Text>
      <img src={bike} alt='bike' />
      <NavLinkButton to="catalog">Catalog</NavLinkButton>
    </Section>
  );
};
export default Main;

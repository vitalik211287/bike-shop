// import { NavLink } from 'react-router-dom';
import { Section, Text } from './BestSellers.styled';
import { NavLinkButton } from 'components/Modal/CartModal/CartModal.styled';

const BestSellers = () => {
  return (
    <Section>
      <Text>Top sales</Text>

      <NavLinkButton to="catalog" style={{color: 'white'}}>Catalog</NavLinkButton>
    </Section>
  );
};
export default BestSellers;

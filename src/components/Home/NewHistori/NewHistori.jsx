import { NavLinkButton } from 'components/Modal/CartModal/CartModal.styled';
import { H2, Section, Text } from './NewHistori.styled';

const NewHistory = () => {
  return (
    <Section>
      <H2>A new story. Specialized</H2>
      <Text>
        The fact that we are riders has always been the driving force behind our
        decisions. Since 1974. When we realised that it was not possible to find
        quality tyres, we focused our efforts on creating the best tyres on the
        market. When people needed to ride cross-country on a cruiser, we
        created the first mountain bike.
      </Text>
      <NavLinkButton to="history" style={{color: 'white'}}>More</NavLinkButton>
    </Section>
  );
};

export default NewHistory;

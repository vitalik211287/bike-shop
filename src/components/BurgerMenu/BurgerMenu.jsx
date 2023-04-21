import { useUser } from 'UserContext';
import Navigation from 'components/Nav/Navigation';

const BurgerMenu = () => {
  const { isActive } = useUser();
  return <div>{isActive && <Navigation /> }</div>;
};
export default BurgerMenu;

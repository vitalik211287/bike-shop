import { ReactComponent as Cart } from '../../img/Group.svg';
import { ReactComponent as Heart } from '../../img/Vector.svg';
import { ReactComponent as Burger } from '../../img/Burger.svg';
import { ReactComponent as UserU } from '../../img/UserU.svg';
import IconButton from 'components/button/IconButton';
import { Ul } from './ButtonBarHeader.styled';

const ButtonBarHeader = () => {
  return (
    <Ul>
      <li>
        <IconButton>
          <Heart />
        </IconButton>
      </li>
      <li>
        <IconButton>
          <UserU />
        </IconButton>
      </li>
      <li>
        <IconButton>
          <Cart />
        </IconButton>
      </li>
      <li>
        <IconButton>
          <Burger />
        </IconButton>
      </li>
    </Ul>
  );
};
export default ButtonBarHeader;

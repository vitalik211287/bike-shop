import IconButton from 'components/button/IconButton';
import {
  BurgerIcone,
  CartIcone,
  HeartIcone,
  Ul,
  UserUIcone,
} from './ButtonBarHeader.styled';
import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import CartModal from 'components/Modal/CartModal/CartModal';
import UserModal from 'components/Modal/UserModal/UserModal';
import { useUser } from 'UserContext';

const ButtonBarHeader = () => {
  const [open, setOpen] = useState(false);
  const [opeN, setOpeN] = useState(false);

  const { isActiveBurgerMenu } = useUser();

  // useEffect(() => {
  //    isActiveBurgerMenu();
  //    return ;
  // }, []);

  const isOpenCartModal = () => {
    setOpen(true);
  };
  const isOpenUsertModal = () => {
    setOpeN(true);
  };

  const onClose = () => {
    setOpeN(false);
    setOpen(false);
  };

  return (
    <>
      <CartModal open={open} onClose={onClose} />
      <UserModal open={opeN} onClose={onClose} />
      {/* <BurgerModal open={isOpen} onClose={onClose} /> */}
      <Ul>
        <li>
          <IconButton>
            <NavLink to="/favorite">
              <HeartIcone />
            </NavLink>
          </IconButton>
        </li>
        <li>
          <IconButton onClick={isOpenUsertModal}>
            <UserUIcone />
          </IconButton>
        </li>
        <li>
          <IconButton onClick={isOpenCartModal}>
            <CartIcone />
          </IconButton>
        </li>
        <li>
          <IconButton onClick={()=>isActiveBurgerMenu()}>
            <BurgerIcone />
          </IconButton>
        </li>
      </Ul>
    </>
  );
};
export default ButtonBarHeader;

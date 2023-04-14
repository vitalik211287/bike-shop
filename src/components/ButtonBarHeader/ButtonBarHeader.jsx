import IconButton from 'components/button/IconButton';
import {
  BurgerIcone,
  CartIcone,
  HeartIcone,
  Ul,
  UserUIcone,
} from './ButtonBarHeader.styled';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import CartModal from 'components/Modal/CartModal/CartModal';
import UserModal from 'components/Modal/UserModal/UserModal';
import BurgerModal from 'components/Modal/BurgerModal/BurgerModal';

const ButtonBarHeader = () => {
  const [open, setOpen] = useState(false);
  const [opeN, setOpeN] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const isOpenCartModal = () => {
    setOpen(true);
  };
  const isOpenUsertModal = () => {
    setOpeN(true);
  };
  const isOpenBurgerModal = () => {
    setIsOpen(true);
  };
  const onClose = () => {
    setOpeN(false);
    setOpen(false);
    setIsOpen(false);
  };

  return (
    <>
      <CartModal open={open} onClose={onClose} />
      <UserModal open={opeN} onClose={onClose} />
      <BurgerModal open={isOpen} onClose={onClose} />
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
          <IconButton onClick={isOpenBurgerModal}>
            <BurgerIcone />
          </IconButton>
        </li>
      </Ul>
    </>
  );
};
export default ButtonBarHeader;

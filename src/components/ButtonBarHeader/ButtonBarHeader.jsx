import { ReactComponent as Cart } from '../../img/Group.svg';

import { ReactComponent as Burger } from '../../img/Burger.svg';
import { ReactComponent as UserU } from '../../img/UserU.svg';
import IconButton from 'components/button/IconButton';
import { NaVlink, Ul } from './ButtonBarHeader.styled';
import { ReactComponent as Heart } from '../../img/Vector.svg';
import { useState } from 'react';
import Modal from 'components/Modal/Modal';
import { ReactComponent as CloseIcon } from '../../img/Close.svg';

const ButtonBarHeader = () => {
  const [toggl, setToggle] = useState(false);
  const showModal = () => {
    setToggle(!toggl);
  };
  return (
    <>
      {toggl && (
        <Modal showModal={showModal}>
          <h1>Hello</h1>
          <IconButton onClick={showModal}>
            <CloseIcon />
          </IconButton>
        </Modal>
      )}
      <Ul>
        <li>
          <IconButton>
            <NaVlink to="/favorite">
              <Heart />
            </NaVlink>
          </IconButton>
        </li>
        <li>
          <IconButton onClick={showModal}>
            <UserU />
          </IconButton>
        </li>
        <li>
          <IconButton>
            <NaVlink to="/addtoorder">
              <Cart />
            </NaVlink>
          </IconButton>
        </li>
        <li>
          <IconButton>
            <Burger />
          </IconButton>
        </li>
      </Ul>
    </>
  );
};
export default ButtonBarHeader;

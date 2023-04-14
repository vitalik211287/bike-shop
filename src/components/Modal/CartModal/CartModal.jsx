import Modal from '../Modal';
import IconButton from 'components/button';
import { ReactComponent as CloseIcon } from '../../../img/Close.svg';
import { NavLinkButton } from './CartModal.styled';

const CartModal = ({ isOpen, onClose, open }) => {
  return (
    <>
      {open && (
        <Modal isOpen={isOpen} onClose={onClose} open={open}>
          <IconButton onClick={onClose}>
            <CloseIcon />
          </IconButton>
          <NavLinkButton to="/addtoorder" onClick={onClose}>
            Order now
          </NavLinkButton>
        </Modal>
      )}
    </>
  );
};

export default CartModal;

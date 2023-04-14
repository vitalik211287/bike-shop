import Modal from '../Modal';
import IconButton from 'components/button';
import { ReactComponent as CloseIcon } from '../../../img/Close.svg';


const BurgerModal = ({ isOpen, onClose, open }) => {
  return (
    <>
      {open && (
        <Modal isOpen={isOpen} onClose={onClose} open={open}>
          <IconButton onClick={onClose}>
            <CloseIcon />
          </IconButton>
          <input type="text" />
          <input type="text" />
          <input type="text" />
        </Modal>
      )}
    </>
  );
};

export default BurgerModal;
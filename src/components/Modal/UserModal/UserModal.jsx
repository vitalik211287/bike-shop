import IconButton from 'components/button';
import Modal from '../Modal';
import { ReactComponent as CloseIcon } from '../../../img/Close.svg';

const UserModal = ({onClose, open }) => {
  return (
    <>
      {open && (
        <Modal onClose={onClose}>
          <IconButton onClick={onClose}>
            <CloseIcon />
          </IconButton>
          <input type="text" />
        </Modal>
      )}
    </>
  );
};
export default UserModal;

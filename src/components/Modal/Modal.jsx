import { createPortal } from 'react-dom';
import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Backdrop, ModalWindow, CloseBtn } from './Modal.styled';
import { useGetContactByIdQuery, useEditContactMutation } from 'redux/api';
import ModalForm from './ModalForm';
import { Loader } from 'components/Loader/Loader';

const modalRoot = document.querySelector('#modal-root');

const Modal = () => {
  const { contactId } = useParams();
  const { data: contact } = useGetContactByIdQuery(contactId);
  const [editContact, { isLoading }] = useEditContactMutation();
  const navigate = useNavigate();
  console.log(contact);

  useEffect(() => {
    const handleEscClose = e => {
      if (e.code === 'Escape') {
        closeModal();
      }
    };
    window.addEventListener('keydown', handleEscClose);
    return () => {
      window.removeEventListener('keydown', handleEscClose);
    };
  });

  const hanldeEditContact = async data => {
    try {
      Loader();
      await editContact({ id: contactId, ...data });
      closeModal();
    } catch (error) {
      console.log(error);
    }
  };

  const closeModal = () => navigate('/contacts');

  return createPortal(
    <Backdrop>
      <ModalWindow>
        <CloseBtn onClick={closeModal} type="button">
          X
        </CloseBtn>
        {contact && (
          <ModalForm
            initValues={{ name: contact.name, number: contact.number }}
            onSubmit={hanldeEditContact}
            disable={isLoading}
          />
        )}
      </ModalWindow>
    </Backdrop>,
    modalRoot
  );
};

export default Modal;

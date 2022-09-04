import PropTypes from 'prop-types';
import { Container, Wrap, Name, Phone } from './ContactListItem.styled';
import { useDeleteContactMutation } from 'redux/api';
import { useNavigate } from 'react-router-dom';
import { Loader } from 'components/Loader/Loader';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const ContactListItem = ({ contact }) => {
  const [deleteContact, { isLoading: removing }] = useDeleteContactMutation();
  const { name, number, id } = contact;
  const navigate = useNavigate();

  const handleDelete = () => {
    deleteContact(id);
    Notify.success('Contact is deleted');
    Loader();
  };

  const openModal = () => {
    Loader();
    navigate(`/edit/${id}`);
  };

  return (
    <Container>
      <Wrap>
        <div>
          <Name>{name}</Name>
        </div>
        <div>
          <Phone>{number}</Phone>
        </div>
      </Wrap>
      <button type="button" disabled={removing} onClick={handleDelete}>
        Delete
      </button>
      <button type="button" disabled={removing} onClick={openModal}>
        Edit
      </button>
    </Container>
  );
};

export default ContactListItem;

ContactListItem.prototype = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};

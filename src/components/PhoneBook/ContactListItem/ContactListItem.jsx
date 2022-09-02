import PropTypes from 'prop-types';
import { Container, Wrap, Name, Phone } from './ContactListItem.styled';
import { useDeleteContactMutation } from 'redux/api';
import { Loader } from 'components/Loader/Loader';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const ContactListItem = ({ contact }) => {
  const [deleteContact, { isLoading: removing }] = useDeleteContactMutation();
  const { name, number, id } = contact;

  const handleDelete = () => {
    deleteContact(id);
    Notify.success('Contact is deleted');
    Loader();
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

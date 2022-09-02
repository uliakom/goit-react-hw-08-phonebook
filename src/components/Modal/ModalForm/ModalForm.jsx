import PropTypes from 'prop-types';
import { Container } from './ModalForm.styled';
import { useState } from 'react';
import { Notify } from 'notiflix';

const ModalForm = ({
  initValues = { name: '', number: '' },
  onSubmit,
  disable,
}) => {
  const [contactName, setContactName] = useState(initValues.name);
  const [contactPhone, setContactPhone] = useState(initValues.number);

  const handleChange = e => {
    const { name, value } = e.currentTarget;
    switch (name) {
      case 'name':
        setContactName(value);
        break;
      case 'number':
        setContactPhone(value);
        break;
      default:
        break;
    }
  };

  const hanldeEditContact = async e => {
    e.preventDefault();
    try {
      await onSubmit({ name: contactName, number: contactPhone });
      Notify.success('Your changes saved', {
        clickToClose: true,
        distance: '300px',
        fontFamily: 'inherit',
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container>
      <form onSubmit={hanldeEditContact}>
        <div>
          <label>
            <span>name </span>
            <input
              type="text"
              name="name"
              value={contactName}
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              onChange={handleChange}
            />
          </label>
        </div>
        <div>
          <label>
            <span>phone </span>
            <input
              type="tel"
              name="number"
              value={contactPhone}
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
              onChange={handleChange}
            />
          </label>
        </div>
        <button type="submit" disabled={disable}>
          Save
        </button>
      </form>
    </Container>
  );
};

export default ModalForm;

ModalForm.propTypes = {
  initValues: PropTypes.object,
  onSubmit: PropTypes.func.isRequired,
  disable: PropTypes.bool.isRequired,
};

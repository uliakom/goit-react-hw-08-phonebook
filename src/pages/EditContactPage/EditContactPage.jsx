import { useEffect } from 'react';
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import {
  Backdrop,
  ModalWindow,
  CloseBtn,
  Container,
} from './EditContactPage.styled';
import { useEditContactMutation } from 'redux/api';
import { Loader } from 'components/Loader/Loader';

const EditContactPage = () => {
  const { contactId } = useParams();
  const [editContact] = useEditContactMutation();
  const navigate = useNavigate();
  const [contactName, setContactName] = useState('');
  const [contactPhone, setContactPhone] = useState('');
  const [isDisabled, setIsDisabled] = useState(true);

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

  useEffect(() => {
    contactName.length > 0 && contactPhone.length > 0
      ? setIsDisabled(false)
      : setIsDisabled(true);
  }, [contactName, contactPhone]);

  useEffect(() => {
    const handleEscClose = e => {
      if (e.code === 'Escape') {
        closePage();
      }
    };
    window.addEventListener('keydown', handleEscClose);
    return () => {
      window.removeEventListener('keydown', handleEscClose);
    };
  });

  const hanldeEditContact = async e => {
    e.preventDefault();
    try {
      Loader();
      await editContact({
        contactId: contactId,
        name: contactName,
        number: contactPhone,
      });
      closePage();
    } catch (error) {
      console.log(error);
    }
  };

  const closePage = () => navigate('/contacts');

  return (
    <Backdrop>
      <ModalWindow>
        <CloseBtn onClick={closePage} type="button">
          X
        </CloseBtn>
        <Container>
          <form onSubmit={hanldeEditContact}>
            <div>
              <label>
                <input
                  type="text"
                  placeholder="Name"
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
                <input
                  type="tel"
                  placeholder="Phone"
                  name="number"
                  value={contactPhone}
                  pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                  title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                  required
                  onChange={handleChange}
                />
              </label>
            </div>
            <button type="submit" disabled={isDisabled}>
              Save
            </button>
          </form>
        </Container>
      </ModalWindow>
    </Backdrop>
  );
};

export default EditContactPage;

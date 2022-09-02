import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { useState } from 'react';
import { Form } from './ContactForm.styled';
import { useCreateContactMutation, useGetContactsQuery } from 'redux/api';

const ContactForm = () => {
  const [createContact, { isLoading }] = useCreateContactMutation();
  const { data: contacts = [] } = useGetContactsQuery();

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const newContact = {
        name,
        number,
      };

      if (
        contacts.some(
          contact =>
            contact.name.toLowerCase() === newContact.name.toLowerCase()
        )
      ) {
        return Notify.warning(
          `${newContact.name} is already in contacts.
        Please choose other name.`,
          {
            position: 'center-center',
            timeout: 4000,
          }
        );
      }
      await createContact(newContact);
      Notify.success('Contact has been added');
      reset();
    } catch (error) {
      Notify.failure(`${error.message}`);
    }
  };

  const handleChange = e => {
    const { name, value } = e.currentTarget;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'phone':
        setNumber(value);
        break;
      default:
        break;
    }
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <Form onSubmit={handleSubmit}>
      <div>
        <label>
          Name
          <input
            type="text"
            name="name"
            value={name}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            onChange={handleChange}
          />
        </label>
      </div>
      <div>
        <label>
          Phone number
          <input
            type="tel"
            name="phone"
            value={number}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            onChange={handleChange}
          />
        </label>
      </div>
      <button type="submit" disabled={isLoading}>
        + Add contact
      </button>
    </Form>
  );
};

export default ContactForm;

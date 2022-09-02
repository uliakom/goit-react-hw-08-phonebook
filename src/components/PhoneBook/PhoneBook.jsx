import ContactListItem from './ContactListItem';
import { Container, ContactList } from './PhoneBook.styled';
import { useSelector } from 'react-redux';
import { getFilterValue } from 'redux/selectors';
import { useGetContactsQuery } from 'redux/api';
import { Loader } from 'components/Loader/Loader';
import { Scrollbars } from 'react-custom-scrollbars-2';

const PhoneBook = () => {
  const { data: contacts = [], error, isLoading } = useGetContactsQuery();
  const filterValue = useSelector(getFilterValue);

  const filteredItems = filterValue
    ? contacts.filter(({ name }) =>
        name.toLowerCase().includes(filterValue.toLowerCase().trim())
      )
    : contacts;

  return (
    <Container>
      <Scrollbars style={{ width: '100%', height: '100%' }}>
        {isLoading && Loader()}
        {error && <h3>Ups...{error}</h3>}
        <ContactList>
          {filteredItems?.map(contact => (
            <ContactListItem key={contact.id} contact={contact} />
          ))}
        </ContactList>
      </Scrollbars>
    </Container>
  );
};

export default PhoneBook;

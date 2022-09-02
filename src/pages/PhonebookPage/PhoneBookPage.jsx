import { Container, Title, SubTitle } from './PhonebookPage.styled';
import ContactForm from 'components/ContactForm';
import PhoneBook from 'components/PhoneBook';
import Filter from 'components/Filter';
import AnimatedPage from 'components/AnimatedPage';

const PhonebookPage = () => {
  return (
    <AnimatedPage>
      <Container>
        <Title>Phonebook</Title>
        <ContactForm />
        <SubTitle>Contacts:</SubTitle>
        <Filter />
        <PhoneBook />
      </Container>
    </AnimatedPage>
  );
};

export default PhonebookPage;

import { Container, Title, SubTitle } from './Home.styled';
import AnimatedPage from 'components/AnimatedPage';
import { useSelector } from 'react-redux';
import { getIsLoggedIn, getUserName } from 'redux/selectors';

const Home = () => {
  const isLoggedIn = useSelector(getIsLoggedIn);
  const user = useSelector(getUserName);
  return (
    <Container>
      <AnimatedPage>
        <Title>Wellcome to your private Phonebook!</Title>
        <SubTitle>
          {isLoggedIn
            ? `${user}, it is safe place to keep your data`
            : 'To enter, please log in or register'}
        </SubTitle>
      </AnimatedPage>
    </Container>
  );
};

export default Home;

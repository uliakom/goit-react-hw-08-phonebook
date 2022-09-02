import { StyledNavLink, Container } from './UserMenu.styled';
import { getUserName } from 'redux/selectors';
import { useDispatch, useSelector } from 'react-redux';
import { authOperations } from 'redux/auth';

const UserMenu = () => {
  const userName = useSelector(getUserName);
  const dispatch = useDispatch();
  return (
    <Container>
      <p>Wellcome, {userName}!</p>
      <StyledNavLink to="/" onClick={() => dispatch(authOperations.logOut())}>
        Logout
      </StyledNavLink>
    </Container>
  );
};

export default UserMenu;

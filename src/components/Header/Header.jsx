import { Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import {
  Container,
  HeaderNav,
  Navigation,
  StyledNavLink,
} from './Header.styled';
import UserMenu from 'components/Header/UserMenu';
import AuthNav from './AuthNav';
import { getIsLoggedIn } from 'redux/selectors';

const Header = () => {
  const isLoggedIn = useSelector(getIsLoggedIn);
  return (
    <Container>
      <HeaderNav>
        <Navigation>
          <div>
            <StyledNavLink to="/">Home</StyledNavLink>
            <StyledNavLink to="/contacts">Phonebook</StyledNavLink>
          </div>
          {isLoggedIn ? <UserMenu /> : <AuthNav />}
        </Navigation>
      </HeaderNav>
      <Outlet />
    </Container>
  );
};

export default Header;

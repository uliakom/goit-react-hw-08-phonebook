import { StyledNavLink } from './AuthNav.styled';

const AuthNav = () => {
  return (
    <div>
      <StyledNavLink to="/login">Login</StyledNavLink>
      <StyledNavLink to="/register">Register</StyledNavLink>
    </div>
  );
};

export default AuthNav;

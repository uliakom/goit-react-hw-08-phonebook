import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  margin-top: 0;
`;

export const HeaderNav = styled.header`
  top: 0;
  left: 0;
  position: sticky;
  z-index: 1100;
  min-height: 64px;
  padding-right: 100px;
  padding-left: 100px;
  padding-top: 20px;
  color: #fff;
  background-color: black;
  p {
    font-size: 30px;
  }
`;

export const Navigation = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const StyledNavLink = styled(NavLink)`
  margin-left: 20px;
  margin-right: 20px;
  font-size: 18px;
  color: #ffffff;
  outline: none;
  text-decoration: none;
  &.active {
    color: #ffa17f;
  }
`;

import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  p {
    text-align: center;
    font-size: 18px;
    color: #ccc8c8;
  }
`;

export const StyledNavLink = styled(NavLink)`
  margin-left: 20px;
  margin-right: 20px;
  font-size: 18px;
  color: #ffffff;
  outline: none;
  text-decoration: none;
`;

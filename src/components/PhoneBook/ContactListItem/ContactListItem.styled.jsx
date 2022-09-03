import styled from '@emotion/styled';

export const Container = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  &:not(last-child) {
    margin-bottom: 20px;
  }

  button {
    margin-right: 10px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    border-radius: 4px;
    border-style: none;
    color: #ffffff;
    font-size: 14px;
    background: background: #FFA17F;  /* fallback for old browsers */
background: -webkit-linear-gradient(to left, #00223E, #FFA17F);  /* Chrome 10-25, Safari 5.1-6 */
background: linear-gradient(to left, #00223E, #FFA17F); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */


    &:hover,
    &:focus {
      transform: scale(1.1);
      /* autoprefixer: off */
      transition: transform 500ms cubic-bezier(0.4, 0, 0.2, 1);
      -webkit-transform: scale(1.1);
      -moz-transform: scale(1.2);
    }
  }
`;

export const Wrap = styled.div`
  width: 400px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Name = styled.p`
  font-size: 17px;
  font-weight: 500;
`;

export const Phone = styled.p`
  color: gray;
`;

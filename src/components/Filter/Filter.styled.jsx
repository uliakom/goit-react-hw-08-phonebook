import styled from '@emotion/styled';

export const Container = styled.div`
  width: 300px;
  display: flex;
  flex-direction: column;
  margin: 0 auto 20px auto;

  lable {
    display: block;
    font-size: 14px;
    display: block;
  }

  input {
    display: block;
    width: 300px;
    height: 20px;
    border-top: 0;
    border-left: 0;
    border-right: 0;
    border-width: 3px;
    border-image: linear-gradient(to left, #00223e, #ffa17f);
    border-image-slice: 1;
    background: transparent;
  }
`;
